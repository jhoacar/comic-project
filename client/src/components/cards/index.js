import React from 'react'
import { Card, Container } from 'react-bootstrap'
import styles from './styles.module.scss';

function CustomCard({ children }) {
    return (
        <Container className="position-relative">
            <Card className={styles.card}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-5">
                    {children}
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CustomCard
