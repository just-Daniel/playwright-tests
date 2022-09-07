const { test, expect } = require('@playwright/test');

const user = {
    url: 'https://ae-ui-staging.automation.smartsuite.com/',
    accountId: 'sgik7prj',
    solutionId: '62c3ebbef26be91c7bf62ca1',
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ZGlBOVQ5ZjR6Yk1BdDF4Vk12NCJ9.eyJodHRwczovL3NtYXJ0c3VpdGUuY29tL2VtYWlsIjoiZGFuaWVsaGFtb3ZAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9zcy1zdGFnaW5nLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMTA2MjcwOTU3OTU5MzU4NTYzMSIsImF1ZCI6Imh0dHBzOi8vc3Mtc3RhZ2luZy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY1NzAwNjkzMywiZXhwIjoxNjU3MDkzMzMzLCJhenAiOiIzd3IwZVBMbWx4Z2dJc3o4V2pSeWhSejAxejd1SHV4MyIsInNjb3BlIjoib2ZmbGluZV9hY2Nlc3MifQ.eIMugg0KFvH4aqiIp_qhhcct8Gmg6-pX8X8-Mp4evKUqRCkFJxHukFiktvy7CZwpJyvdTC1E_u8Ru8ZZOsobGVKq77bwJXTrdewIYs_umVLxrMGi_Wi04Q4-mDihITOXum4QCXGkaPV-zeAYLMkzGdsOA8DAeReTYUihQc58_OeDbAZzfhRGYfsS_EiolPaIWCLzfI7T1rGZJpSo-D8KEd3qki6Vho-7q1FHLt74KbaH_cAixhHU_EvsEGcLaMgRaxV2lqydyjuTIoV4WYBe1TvUVz2U7J1VVIhO_umfK6i4Yrja01W9LywLu6BbQhOdLpu0Jeil9V9gF-HixQMKCw'
}

test('Log in', async ({ page }) => {
    await page.goto(user.url);

    await page.click('button.empty-button');   

    await page.fill('input[name=account-id]', user.accountId);
    await page.fill('input[name=solution-id]', user.solutionId);
    await page.fill('input[name=access-token]', user.token);
    
    await page.click('button.round-button');
    await page.reload();



    await expect(page.locator('text=abc')).toHaveText('abc');
    await page.locator('text=abc').click();

    await page.screenshot({ path: 'screen.png' })
})
