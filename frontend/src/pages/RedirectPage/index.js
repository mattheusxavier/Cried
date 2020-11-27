import React from 'react'
import Header from '../../components/Header'
import { Container } from 'react-bootstrap'

import { StatsContainer } from './styles'

import { FaExclamationTriangle } from 'react-icons/fa'

import ShortenerService from '../../services/shortnerService'

class RedirectPage extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params

        try {
            const service = new ShortenerService()
            const { url } = await service.getLink(code)

            window.location = url
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a URL solicitada não existe! :( ' })
        }
    }

    render() {
        const { errorMessage } = this.state
        return (
            <Container>
                {errorMessage ? (
                    <>
                        <Header>
                            Seu novo encurtador de URL.
                        </Header>
                        <StatsContainer className="text-center">
                            <FaExclamationTriangle size="62px" color="#F8D7DA" />
                            <p className="m-3">{errorMessage}</p>
                            <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                        </StatsContainer>
                    </>
                ) : (
                    <Header>Redirecionando...</Header>
                ) }
            </Container>
        )
    }
}

export default RedirectPage