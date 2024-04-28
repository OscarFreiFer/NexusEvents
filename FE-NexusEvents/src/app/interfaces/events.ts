export interface Events {
    id: number;
    name: string;
    icon: string;
    image: string;
    description: string;
    imageProjects: string;
}

export const events: Events[] = [
    {
        id: 1,
        name: 'Deportivos',
        icon: 'sports_soccer',
        image: '../../../assets/imagenes-cards/1.2.png',
        description:
            'Celebramos la grandeza del deporte con elegancia y estilo. Desde ceremonias de premiación hasta galas deportivas exclusivas, nos especializamos en crear experiencias que fusionan la emoción del deporte con la sofisticación de los eventos de élite.',
        imageProjects: 'url(../../../assets/imagenes-dashboard/wanda.jpeg)',
    },
    {
        id: 2,
        name: 'Institucionales',
        icon: 'apartment',
        image: '../../../assets/imagenes-cards/2.png',
        description:
            'Nuestros eventos institucionales están diseñados para elevar tu marca y fortalecer tus relaciones. Desde conferencias hasta galas benéficas, nos comprometemos a brindarte una experiencia excepcional que refleje la esencia y los valores de tu organización.',
        imageProjects: 'url(../../../assets/imagenes-dashboard/africa.jpg)',
    },
    {
        id: 3,
        name: 'Corporativos',
        icon: 'business_center',
        image: '../../../assets/imagenes-cards/3.png',
        description:
            'Descubre el poder de los eventos corporativos para impulsar el éxito empresarial. Desde lanzamientos de productos hasta ceremonias de premios, nos especializamos en crear experiencias memorables que fortalezcan la identidad de tu marca y generen impacto.',
        imageProjects:
            'url(../../../assets/imagenes-dashboard/mercedes.jpg)',
    },
];
