export const TestData = [
    {
        question: 'Es necesario que deba portar documento de identidad para donar sangre.',
        status: false,
        src: '/assets/test/carnet-de-identidad.png',
        answer: [
            {
                answer: 'Verdadero',
                status: true
            },
            {
                answer: 'Falso',
                status: false
            }
        ]
    },
    {
        question: 'Debo ser mayor de edad para donar sangre.',
        status: false,
        src: '/assets/test/pelicula-no-recomendada-a-menores-de-18-anos.png',
        answer: [
            {
                answer: 'Verdadero',
                status: true
            },
            {
                answer: 'Falso',
                status: false
            }
        ]
    },
    {
        question: 'Debo haber dormido al menos 5 horas la noche previa de la donación.',
        status: false,
        src: '/assets/test/hora-de-acostarse.png',
        answer: [
            {
                answer: 'Verdadero',
                status: true
            },
            {
                answer: 'Falso',
                status: false
            }
        ]
    },
    {
        question: 'Cuàntos kilos debo pesar, como mínimo, para ser donante de sangre?',
        status: false,
        src: '/assets/test/escala-de-peso.png',
        answer: [
            {
                answer: 'Más de 50 kilos',
                status: true
            },
            {
                answer: 'Más de 55 kilos',
                status: false
            },
            {
                answer: 'Más de 60 kilos',
                status: false
            }
        ]
    },
    {
        question: 'Cuántas horas antes debo haber ingerido alimentos, como mínimo, para ser donante de sangre?',
        status: false,
        src: '/assets/test/dieta.png',
        answer: [
            {
                answer: 'Las últimas 8 horas',
                status: false
            },
            {
                answer: 'Las últimas 5 horas',
                status: true
            },
            {
                answer: 'Las últimas 10 horas',
                status: false
            }
        ]
    },
    {
        question: 'Si soy mujer,¿Cada cuántos meses puedo donar sangre?',
        status: false,
        src: '/assets/test/calendario.png',
        answer: [
            {
                answer: 'Cada 12 meses',
                status: false
            },
            {
                answer: 'Cada 6 meses',
                status: false
            },
            {
                answer: 'Cada 4 meses',
                status: true
            }
        ]
    },
    {
        question: 'Si me hice un tatuaje hace 6 meses,¿Puedo donar sangre?',
        status: false,
        src: '/assets/test/tatuaje.png',
        answer: [
            {
                answer: 'Si',
                status: true
            },
            {
                answer: 'No',
                status: false
            }
        ]
    },
    {
        question: 'Si consumí alcohol en las ultimas 8 horas,¿Puedo donar sangre?',
        status: false,
        src: '/assets/test/vidrio.png',
        answer: [
            {
                answer: 'Si',
                status: false
            },
            {
                answer: 'No',
                status: true
            }
        ]
    },
    {
        question: 'Si fumé marihuana en las últimas 10 horas,¿Puedo donar sangre?',
        status: false,
        src: '/assets/test/stoner.png',
        answer: [
            {
                answer: 'Si',
                status: false
            },
            {
                answer: 'No',
                status: true
            }
        ]
    },
    {
        question: 'Si tuve diarrea en los últimos 8 dias, ¿Puedo donar sangre?',
        status: false,
        src: '/assets/test/inodoro.png',
        answer: [
            {
                answer: 'Si',
                status: false
            },
            {
                answer: 'No',
                status: true
            }
        ]
    }
];
