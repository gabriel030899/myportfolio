import comicreaders1 from '../../../public/comicreaders1.png'
import myportfolio from '../../../public/my-portfolio.png'
import lojify from '../../../public/lojifyplatform.png'


const highlightProjects = [
    {
        id: 1,
        name: 'My Portfolio',
        link: 'https://www.gabrielzanella.com.br',
        linkName: 'gabrielzanella.com.br',
        skills: [
            {name:'HTML'}, 
            {name:'SASS'},
            {name:'REACT'},
            {name:'EMAILJS'},
            {name:'NEXTJS'}
        ],
        github: 'https://github.com/gabriel030899/my-portfolio-react',
        image: myportfolio,
        description: "I built my portfolio website entirely with React.js, ensuring a fast and dynamic user experience. The project is fully responsive, adapting seamlessly to all devices. For styling, I used SASS, allowing for modular and maintainable CSS with enhanced flexibility. To handle contact form submissions efficiently, I integrated the EmailJS library, enabling direct email sending without the need for a back-end. The combination of React.js, SASS, and EmailJS ensures a modern, scalable, and visually appealing portfolio."
    },
    {
        id: 2,
        name: 'Comic Readers',
        link: 'https://comicreaders.netlify.app/',
        linkName: 'comicreaders.netlify.app',
        skills: [
            {name:'HTML'}, 
            {name:'CSS'},
            {name:'JAVASCRIPT'},
        ],
        github: 'https://github.com/gabriel030899/comicreaders',
        image: comicreaders1,
        description: "I developed Comic Readers, a website designed to enhance the user experience in book searches. Using HTML, CSS, and JavaScript, I created an intuitive interface with advanced filters that make searches faster and more efficient. Additionally, I developed a book recommendation algorithm that suggests options based on user choices, creating a dynamic and personalized experience. This solution offers multiple combinations of suggestions, making it easier to choose books that match the user's interests. The project not only improves interaction but also integrates features that make the literary discovery process more engaging and accurate."
    },
    {
        id: 3,
        name: 'Lojify Platform ( In Progress )',
        link: 'https://lojifyplatform.netlify.app/',
        linkName: 'lojifyplatform.netlify.app',
        skills: [
            {name:'HTML'}, 
            {name:'TAILWIND'},
            {name:'REACT'},
            {name:'NEXTJS'},
            {name:'TYPESCRIPT'},
            {name:'NODEJS'},
        ],
        github: 'https://github.com/gabriel030899/lojify-platform',
        image: lojify,
        description: "I am developing Lojify to be a SaaS platform. The idea is to create a user-friendly web platform for stores. I am using Next.js, React, TypeScript, Tailwind, and NodeJS for the back end in the future. The focus of the platform is to offer a better and more intuitive solution to manage store sales, enabling features like creating carts while attending customers and completing sales at the counter. Some essential functionalities include issuing invoices, managing products, managing carts, and providing sales summaries. The manager will have access to an exclusive dashboard to view various charts and reports on sales, employees, and customers."
    }
]

export default highlightProjects;