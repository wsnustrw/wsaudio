import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'WS',
    lastName:  'AUDIO',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Professional Audio & Lighting',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName} AUDIO's Newsletter</>,
    description: <>We occasionally write about Audio, Lighting, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/',
    },
    {
        name: 'Whatsapp',
        icon: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=6287796989192&text=Halo!%20WS%20Audio.%0ASaya%20ingin%20memesan%20Jadwal%20untuk%20Acara...',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:hello@wsaudio.id',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s `,
    description: `Rental Sound System ${person.role}`,
    headline: <>Professional Sound System & Lighting</>,
    subline: <>Kami adalah penyedia layanan sewa Sound System dan Lighting yang siap memenuhi berbagai kebutuhan acara <br/> mulai dari pernikahan, konser, hingga acara perusahaan,<br/> dengan Peralatan Berkualitas Tinggi dan Layanan Profesional.</>
}

const about = {
    label: 'About',
    title: 'About us',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://api.whatsapp.com/send?phone=6287796989192&text=Halo!%20WS%20Audio.%0ASaya%20ingin%20memesan%20Jadwal%20untuk%20Acara...'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Transformasikan acara Anda dengan menyewa sound system dan lighting dari kami! Dengan peralatan profesional terkini dan kru ahli yang berpengalaman, kami menjamin pengalaman audio dan visual yang memukau. Jadikan setiap momen lebih hidup dan berkesan dengan layanan kami yang terpercaya!</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Sound System',
        experiences: [
            {
                company: 'Professional Audio',
                timeframe: 'Berdiri sejak 2020',
                role: 'Equipment & Teknisi berpengalaman',
                achievements: [
                    <>Dengan menggunakan alat yang berkualitas akan sangat mempengaruhi kualitas suara yang berkelas.</>,
                    <>Alat berkualitas tidak akan menghasilkan hasil yang berkelas jika tidak disandingkan dengan Teknisi yang memiliki pengalaman.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Lighting',
        institutions: [
            {
                name: 'Lights Everywhre',
                description: <>Dengan teknologi pencahayaan canggih dan desain yang kreatif, kami siap menciptakan suasana yang memukau dan menghidupkan setiap momen. Percayakan pencahayaan acara Anda kepada kami dan saksikan keajaibannya!.</>,
            },
            {
                name: 'Professional Lighting Engineer',
                description: <>Kreativitas dan Teknologi untuk menciptakan pengalaman visual yang menakjubkan. Dengan pemahaman mendalam tentang pencahayaan dan desain panggung, Kami siap membantu mewujudkan visi acara Anda dengan solusi pencahayaan yang inovatif dan efektif..</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Equipment',
                description: <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quaerat!</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Great Engineers',
                description: <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quaerat!</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Berbagi Pengalaman Seputar Audio Sistem dan Lighting...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'Our projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };