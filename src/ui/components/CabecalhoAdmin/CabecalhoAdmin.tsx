import { Link, Box, Button, ButtonGroup } from '@mui/material'
import NextLink from 'next/link'
import {
  CabecalhoContainer,
  Logo,
  LinksContainer
} from './CabecalhoAdmin.style'

export default function CabecalhoAdmin() {
  return (
    <CabecalhoContainer>
      <div>
        <Logo src={'/images/logo.svg'} alt={'Adote um Pet'} />
        <LinksContainer>
        <Box>
          <ButtonGroup variant="text" aria-label="outlined button group" 
            sx={{flexDirection: {xs: 'column', sm: 'row'}}} 
          >
            <Button>
              <Link component={NextLink} href={'/pets/cadastro'}>
                <a>Cadastrar{' '}
                  <Box
                   component={'span'}
                   sx={{ display: { sm: 'initial', xs: 'none' } }}
                  >
                    Pet
                  </Box>
                </a> 
              </Link>
            </Button>
            <Button>
              <Link component={NextLink} href={'/pets/relatorio'}>
                <a>
                  Relatório{' '}
                  <Box
                    component={'span'}
                    sx={{ display: { sm: 'initial', xs: 'none' } }}
                  >
                    de Adoção
                  </Box>
                </a>
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
        </LinksContainer>
      </div>
    </CabecalhoContainer>
  )
}
