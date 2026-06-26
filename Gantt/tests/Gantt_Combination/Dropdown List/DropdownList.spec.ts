import { test, expect } from '../Helper/ScriptErrorFinder';
import { Helper } from '../Helper/Helper';

// Helper function to aggressively remove license banners (preserves Gantt Add/Edit dialogs)
async function removeLicenseBanners(page: any) {
    await page.evaluate(() => {
        const licenseKeywords = [
            'claim your free account',
            'syncfusion account', 
            'get a key',
            'free trial',
            'metro studio',
            'ebooks',
            'white papers',
            'trusted by',
            'leading companies',
            'support tickets'
        ];
        
        const isLicenseElement = (el: Element): boolean => {
            try {
                const text = (el.textContent || '').toLowerCase();
                return licenseKeywords.some(keyword => text.includes(keyword));
            } catch {
                return false;
            }
        };
        
        // 1. Remove obvious license-specific elements immediately
        const removeSelectors = [
            '.e-license-banner',
            '.e-toast-container', 
            '.e-toast',
            '.sf-license',
            '.syncfusion-license',
            '.syncfusion-license-banner',
            'iframe[src*="license"]',
            'iframe[src*="syncfusion"]'
        ];
        
        removeSelectors.forEach(sel => {
            try {
                document.querySelectorAll(sel).forEach(el => {
                    if (el && el.parentNode) el.parentNode.removeChild(el);
                });
            } catch (e) { /* ignore */ }
        });
        
        // 2. Check all dialogs - use CSS hiding for license, keep Gantt dialogs
        document.querySelectorAll('.e-dialog, .e-dlg-container, div[role="dialog"]').forEach(el => {
            try {
                const htmlEl = el as HTMLElement;
                
                // If it's a license dialog, hide it completely
                if (isLicenseElement(htmlEl)) {
                    htmlEl.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; position: absolute !important; top: -99999px !important; z-index: -99999 !important; pointer-events: none !important;';
                    
                    // Also try to remove it
                    if (htmlEl.parentNode) {
                        try {
                            htmlEl.parentNode.removeChild(htmlEl);
                        } catch { /* ignore */ }
                    }
                }
            } catch (e) { /* ignore */ }
        });
        
        // 3. Remove overlays/backdrops associated with license dialogs only
        document.querySelectorAll('.e-dlg-overlay, .modal-backdrop, [class*="backdrop"]').forEach(el => {
            try {
                const htmlEl = el as HTMLElement;
                const parent = el.parentNode;
                
                if (parent) {
                    // Check siblings for license content
                    const siblings = Array.from(parent.children);
                    const hasLicenseSibling = siblings.some(child => isLicenseElement(child));
                    
                    if (hasLicenseSibling) {
                        htmlEl.style.cssText = 'display: none !important; opacity: 0 !important; pointer-events: none !important;';
                        if (htmlEl.parentNode) {
                            try {
                                htmlEl.parentNode.removeChild(htmlEl);
                            } catch { /* ignore */ }
                        }
                    }
                }
            } catch (e) { /* ignore */ }
        });
        
        // 4. Scan for any fixed/absolute positioned elements with license content
        document.querySelectorAll('div, section, aside').forEach(el => {
            try {
                if (isLicenseElement(el)) {
                    const style = window.getComputedStyle(el);
                    if (style.position === 'fixed' || style.position === 'absolute') {
                        const htmlEl = el as HTMLElement;
                        htmlEl.style.cssText = 'display: none !important; visibility: hidden !important;';
                        if (htmlEl.parentNode) {
                            try {
                                htmlEl.parentNode.removeChild(htmlEl);
                            } catch { /* ignore */ }
                        }
                    }
                }
            } catch (e) { /* ignore */ }
        });
    });
}

test('1-Dropdown List sample rendering', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dropdown');
    test.info().annotations.push({ type: 'Sample link', description: 'http://localhost:5158/gantt-dropdown' });
    await page.waitForTimeout(4000);
    await removeLicenseBanners(page);
    await page.waitForTimeout(300);
    //Screenshot validation-Sample rendering
    expect(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('2-Dropdown popup with Gantt preview', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dropdown');
    await page.waitForTimeout(4000);
    //Click dropdown to open popup with Gantt preview
    await page.locator('#projectDropdown').click({ force: true });
    await page.waitForTimeout(800);
    await removeLicenseBanners(page);
    await page.waitForTimeout(300);
    //Screenshot validation-Dropdown popup with live Gantt preview
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    //Close popup by pressing Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
});

test('3-Select Mobile App project', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dropdown');
    await page.waitForTimeout(4000);
    //Click the dropdown to select project using ID
    await page.locator('#projectDropdown').click({ force: true });
    await page.waitForTimeout(500);
    //Click to select project Mobile App
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    await removeLicenseBanners(page);
    await page.waitForTimeout(300);
    //Screenshot validation-Mobile App selected
    expect.soft(await page.locator('#mainGanttContainer').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('4-Select Cloud Migration project', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dropdown');
    await page.waitForTimeout(4000);
    //Click the dropdown to select project using ID
    await page.locator('#projectDropdown').click({ force: true });
    await page.waitForTimeout(500);
    //Click to select Cloud Migration project
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    await removeLicenseBanners(page);
    await page.waitForTimeout(300);
    //Screenshot validation-Cloud Migration selected
    expect.soft(await page.locator('#mainGanttContainer').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
});

test('5-Popup Gantt toolbar interactions', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5158/gantt-dropdown');
    await page.waitForTimeout(4000);
    //Open dropdown popup
    //Click the dropdown to select project using ID
    await page.locator('#projectDropdown').click({ force: true });
    await page.waitForTimeout(500);
    //Click to select Cloud Migration project
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(800);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);
    //Zoom In
    await page.locator('#mainGanttContainer .e-toolbar-item[title*="Zoom in"]').first().click({ force: true });
    await page.waitForTimeout(500);
    await removeLicenseBanners(page);
    await page.waitForTimeout(300);
    //Screenshot validation-Popup Gantt expanded and zoomed
    expect.soft(await page.locator('.e-gantt').screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });
    await page.keyboard.press('Escape');
});
