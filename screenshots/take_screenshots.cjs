const puppeteer = require('puppeteer');

const SCREENSHOT_DIR = '/Users/zhangruojiang/openclaw/project/mygongfu-source/screenshots';

const pages = [
  { name: 'homepage', url: 'https://mygongfu.com/' },
  { name: 'geo_service', url: 'https://mygongfu.com/pufeng-geo/' },
  { name: 'fde_service', url: 'https://mygongfu.com/fde-service/' },
  { name: 'cases', url: 'https://mygongfu.com/cases/' },
  { name: 'about', url: 'https://mygongfu.com/about/' },
  { name: 'diagnosis_result', url: 'https://mygongfu.com/diagnosis-result/' },
];

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const pageInfo of pages) {
    console.log(`\n=== Capturing: ${pageInfo.name} (${pageInfo.url}) ===`);
    let page;
    try {
      page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });

      // Use a simpler wait strategy
      await page.goto(pageInfo.url, { waitUntil: 'networkidle2', timeout: 30000 });
      console.log(`  Page loaded successfully`);

      // Wait a moment for rendering
      await new Promise(r => setTimeout(r, 3000));

      const filePath = `${SCREENSHOT_DIR}/${pageInfo.name}.png`;
      await page.screenshot({
        path: filePath,
        fullPage: true,
      });
      console.log(`  Screenshot saved: ${filePath}`);

      const title = await page.title();
      console.log(`  Page title: ${title}`);

      await page.close();
      page = null;
    } catch (err) {
      console.error(`  ERROR capturing ${pageInfo.url}: ${err.message}`);
      if (page) {
        try { await page.close(); } catch(e) {}
      }
    }
  }

  await browser.close();
  console.log('\n=== All screenshots captured ===');
}

takeScreenshots().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
