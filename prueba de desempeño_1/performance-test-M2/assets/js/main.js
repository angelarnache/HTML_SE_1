const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    @media (max-width: 768px){
        header {
            position: static;
            transform: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.4rem;
            padding: 1rem;
            height: auto;
        }
`