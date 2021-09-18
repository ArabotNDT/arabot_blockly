#!/usr/bin/env python
import http.server
import socketserver

from rospkg import RosPack

PORT = 1036

rp = RosPack()
DIRECTORY = rp.get_path('arabot_blockly')
DIRECTORY += '/frontend'

print("Changing server path to: " + DIRECTORY)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
