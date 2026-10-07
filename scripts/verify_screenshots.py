import http.server
import socketserver
import threading
import time
import os
from playwright.sync_api import sync_playwright

PORT = 4173
DIST_DIR = os.path.abspath('dist')
VERIF_DIR = os.path.abspath('verification')
os.makedirs(VERIF_DIR, exist_ok=True)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)

def start_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()

server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()
time.sleep(1)

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. Desktop Full Page
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(f"http://localhost:{PORT}")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(VERIF_DIR, "desktop_full.png"), full_page=True)
    page.screenshot(path=os.path.join(VERIF_DIR, "desktop_hero.png"), full_page=False)
    
    # 2. Tablet Viewport
    tablet_page = browser.new_page(viewport={"width": 768, "height": 1024})
    tablet_page.goto(f"http://localhost:{PORT}")
    tablet_page.wait_for_timeout(1000)
    tablet_page.screenshot(path=os.path.join(VERIF_DIR, "tablet_view.png"), full_page=False)

    # 3. Mobile Viewport
    mobile_page = browser.new_page(viewport={"width": 375, "height": 812})
    mobile_page.goto(f"http://localhost:{PORT}")
    mobile_page.wait_for_timeout(1000)
    mobile_page.screenshot(path=os.path.join(VERIF_DIR, "mobile_view.png"), full_page=False)
    
    # 4. Interactive Estimate Modal test
    page.click("button:has-text('Get a Free Estimate')")
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(VERIF_DIR, "estimate_modal.png"))

    browser.close()

print("All verification screenshots captured successfully in verification/.")
