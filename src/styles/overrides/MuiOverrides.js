import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            marginRight:'30px',
            marginLeft:'30px'
          },
        },
      },
      MuiCard:{
        styleOverrides:{
          root:{
            textAlign: 'left'
          }
        }
      },
      MuiCardHeader:{
        styleOverrides:{
          root:{
            backgroundColor:'#3fa0f6',
            flexDirection:'row-reverse'
          },
          title:{          
            fontSize:'18px',
            color:'white'
          },
          avatar:{
            marginLeft:"20px",
            marginRight:'0px'
          }
        }
      },
      MuiBox:{
        styleOverrides:{
          root:{
            padding:'0px'
          }
        }
      },
      MuiTab:{
        styleOverrides:{
            root:{
                fontSize:'16px'
            }
        }
      },
      MuiGrid:{
        styleOverrides:{
            root:{
                padding: "10px",
                marginLeft:'auto',
                marginRight:'auto'
            },
            container: {
              padding: "10px 30px"
            }
        }
      },
      MuiButton:{
        styleOverrides:{
            root:{
                marginTop: "10px", 
                marginLeft: "40px"
            }
        }
      },
      MuiPaper:{
        styleOverrides:{
            root:{
                marginBottom:'20px',
                borderRadius:'0px',
            }
        }
      }
    },
  });

  export default theme;