#!/usr/bin/env python3
"""Local dev server with extensionless URL support. Run: python3 serve.py"""
import http.server, os, sys, urllib.parse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        url_path = urllib.parse.urlparse(self.path).path
        fs_path = os.path.join(ROOT, url_path.lstrip('/'))
        if not os.path.isfile(fs_path) and '.' not in os.path.basename(url_path):
            if os.path.exists(fs_path + '.html'):
                self.path = url_path.rstrip('/') + '.html'
        super().do_GET()

    def log_message(self, fmt, *args):
        print(fmt % args)

print(f'Serving at http://localhost:{PORT}  (Ctrl+C to stop)')
with http.server.HTTPServer(('', PORT), Handler) as httpd:
    httpd.serve_forever()
