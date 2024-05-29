describe('API requests work well', () => {
    it('data parses successfully', async () => {
        const response = await fetch('https://logiclike.com/docs/courses.json').then(resp => resp.json()).then(resp => resp);
        expect(response).toBeTruthy();
    });
    
    it('response has a length greater than 0', async () => {
        const response = await fetch('https://logiclike.com/docs/courses.json').then(resp => resp.json()).then(resp => resp);
        expect(response.length).toBeGreaterThan(0);
    });
});

export {};
