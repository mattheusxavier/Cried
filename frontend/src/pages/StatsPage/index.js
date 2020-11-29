import React from 'react'
import Header from '../../components/Header'
import { Container } from 'react-bootstrap'

import ShortenerService from '../../services/shortnerService'

import { StatsBox, StatsBoxTitle, StatsContainer, StatsRow } from './styles'

import { FaExclamationTriangle } from 'react-icons/fa'
class StatsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            shortenedURL: {},
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params

        try {
            const service = new ShortenerService()
            const shortenedURL = await service.getStats(code)

            this.setState({ isLoading: false, shortenedURL })
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a URL solicitada não existe. :( '})
        }
    }
    
    render() {
        const {errorMessage, shortenedURL} = this.state
        return (
            <Container>
                <Header>Estatísticas: </Header>
                {errorMessage ? (
                    <StatsContainer className="text-center">
                        <FaExclamationTriangle size="62px" color="#F8D7DA" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <p><b>http://cried.tk{shortenedURL.code}</b></p>
                        <p>Redireciona para <br/> {shortenedURL.url}</p>
                        <StatsRow>
                            <StatsBox>
                                <b>{shortenedURL.hits}</b>
                                <StatsBoxTitle>Visitas</StatsBoxTitle>
                            </StatsBox>
                            <StatsBox>
                                <b>{shortenedURL.relativeDate}</b>
                                <StatsBoxTitle>Última visita</StatsBoxTitle>
                            </StatsBox>
                        </StatsRow>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>
                )}
            </Container>
        )
    }
}

export default StatsPage