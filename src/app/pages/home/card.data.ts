export const CardData = [
    {
        id: 2,
        title: 'SI Puedo Donar',
        icon: 'thumbs-up',
        background: '#660366',
        router: '/can-donate'
    },
    {
        id: 3,
        title: 'NO Puedo Donar',
        icon: 'thumbs-down',
        background: '#ff0000',
        router: '/cant-donate'
    },
    {
        id: 4,
        title: 'Lugares Donación',
        icon: 'pin',
        background: '#ffbf00',
        router: '/map'
    },
    {
        id: 5,
        title: 'Mitos Donaciones',
        icon: 'help',
        background: '#5cb85c',
        router: '/'
    }
];

export const HomeCardData = [
    {
        id: 1,
        title: 'Solicitar Donantes',
        icon: 'heart',
        background: '#6495ed',
        router: '/'
    },
    {
        id: 6,
        title: 'Quiero Ser Donante',
        icon: 'water',
        background: '#df4f3f',
        router: '/donor'
    },
    {
        id: 7,
        title: 'Campañas',
        icon: 'information-circle',
        background: '#ff8c00',
        router: '/'
    },
];

export interface ICard {
    id: number;
    title: string;
    icon: string;
    background: string;
}
