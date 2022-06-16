import { Link, Box, Button } from '@mui/material'
import NextLink from 'next/link'
import { CabecalhoContainer } from '../CabecalhoAdmin/CabecalhoAdmin.style'

export default function ButtonSizes() {
  return(
    <CabecalhoContainer>
      <Box >
        <div> 
          <Button size="large" variant="outlined">
            <Link component={NextLink} href={'/'}><a>Voltar para Home</a></Link>
          </Button>
        </div>
      </Box>
    </CabecalhoContainer>
  )
}