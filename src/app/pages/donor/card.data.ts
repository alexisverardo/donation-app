export const CardData = [
    {
        id: 2,
        title: 'Cómo hacerlo',
        icon: 'heart',
        background: '#66DDB3',
        router: '/how-do-it'
    },
    {
        id: 3,
        title: 'Dónde donar',
        icon: 'pin',
        background: '#777777',
        router: '/map'
    },
    {
        id: 4,
        title: 'Por qué donar',
        icon: 'help',
        background: '#F4D271',
        router: '/why-do-it'
    },
    {
        id: 5,
        title: 'Quiénes pueden',
        icon: 'people',
        background: '#8876F8',
        router: '/who-can'
    }
];

export interface ICard {
    id: number;
    title: string;
    icon: string;
    background: string;
}
