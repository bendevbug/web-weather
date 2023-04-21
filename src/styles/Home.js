import {styled} from '../styles/stitches.config.js'

export const Container = styled('main',{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100vw',
    height: '100vh',

    background: 'rgb(5,158,218)',
    background: 'linear-gradient(180deg, rgba(5,158,218,1) 0%, rgba(155,205,221,1) 77%, rgba(193,187,177,1) 90%, rgba(196,189,181,1) 100%)',
    
   
    div: {
        background: 'rgb(255, 255, 255, 30%)',
        width: '40rem',
        height: '30rem',

        borderRadius: '0 0 1rem 1rem',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        textAlign: 'center',
        fontSize: '2rem',

        "@md": {
            fontSize:'1.4rem',

            width: '25rem',
            height: '25rem'
        },

        "@sm": {
            fontSize:'1rem',

            width: '20rem',
            height: '20rem'
        },
        "@xs": {
            fontSize:'0.8rem',

            width: '15rem',
            height: '18rem'
        },

        h3: {
            fontWeight: '500',

            "@md": {
                fontSize:'1.2rem',
            },

            "@sm": {
                fontSize:'1rem',
            },
            "@xs": {
                fontSize:'0.8rem',
            },
        },

        h4: {
            fontSize: '1.5rem',
            fontWeight: '400',

            "@md": {
                fontSize:'1.2rem',
            },

            "@sm": {
                fontSize:'1rem',
            },
            "@xs": {
                fontSize:'0.9rem',
            },
        },

        h5: {
            fontWeight: '300',
            fontSize: '1.3rem',


            "@md": {
                fontSize:'1rem',
            },

            "@sm": {
                fontSize:'0.9rem',
            },

            "@xs": {
                fontSize:'0.8rem',
            },
        },


        img: {
            background: 'none',
            width: '10rem',
            height: '10rem',
        },


    },

    'div:first-child': {
        background: 'rgb(255, 255, 255, 50%)',
        width: '40rem',
        height: '10rem',
        borderRadius: '1rem 1rem 0 0',


        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        gap: '1rem',

        "@md": {
            fontSize:'1.4rem',

            width: '25rem',
        },

        "@sm": {
            fontSize: '1rem',

            width: '20rem',
            height: '7rem'
        },

        "@xs": {
            fontSize: '8rem',

            width: '18rem',
            height: '6rem'
        },

        input: {
            width: '18rem',
            height: '2.5rem',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            fontSize: '1.2rem',

            '&:focus': {
                outline: '0',
            },

            "@md": {
                width: '15rem',
                fontSize: '1rem',
            },

            "@sm": {
                width: '12rem',
                fontSize: '0.8rem',
            },

            "@xs": {
                width: '10rem',
                fontSize: '0.7rem',
            }
        },
        button: {
            width: '5rem',
            height: '2.5rem',
            borderRadius: '0.5rem',
            fontSize: '1rem',

            '&:hover': {
                cursor: 'pointer',
                background: '#000',
                color: '#FFF',

                transition: 'all 0.3s',
            },

            "@md": {
                fontSize: '0.8rem',
            },

            "@sm": {
                width: '3rem',
                fontSize: '0.6rem',
            }
        }
    },
    a: {
        textAlign: 'center',

        textDecoration: 'none',
        color: 'inherit',

        img: {
            marginTop: '1rem',
            '&:hover': {
                filter: 'brightness(0.2)',
                transition: 'all 0.2s',
                cursor: 'pointer'
            }
        },
    
    },
    
 
   

});

