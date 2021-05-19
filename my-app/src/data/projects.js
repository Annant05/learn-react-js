import portfolio_thumb from '../assets/portfolio_thumb.jpg';
import gyankriti_thumb from '../assets/gyankriti_thumb.jpg';
import route53auto_thumb from '../assets/route53auto_thumb.jpg';


const PROJECTS = [
    {
        id: 1,
        title: 'Learning React JS',
        description: 'A React App that I built while doing a course, involving JS and core web dev concetps!',
        link: 'https://github.com/annant05/learn-react-js',
        image: portfolio_thumb
    },
    {
        id: 2,
        title: 'Gyankriti Reboot',
        description: 'Full Stack project to automate the admission process of Gyankriti.com !',
        link: 'https://github.com/Annant05/gyankriti_reboot',
        image: gyankriti_thumb
    },
    {
        id: 3,
        title: 'Route53 DNS Automation',
        description: 'A Serverless Lambda Automation to update DNS in Route53 for EC2 servers.!',
        link: 'https://github.com/Annant05/route53-dns-for-ec2-IPv4',
        image: route53auto_thumb
    }
];


export default PROJECTS;