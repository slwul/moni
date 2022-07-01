import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Card from "../components/card";
import ChartTotalSampah from "../components/line-chart";
import ChartSampahOlahan from '../components/pie-chart';

function Dashboard(): JSX.Element {
    return(
        <Container maxW='auto' centerContent>
            <Box padding='4' color='black' w='100%' px="50">
                <Heading size="lg" fontSize="36px" textAlign="center" my={100}>
                    DASHBOARD
                </Heading>
                <Card />
                <Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop={12}>
                    <GridItem colSpan={2} h='10'>
                        <h1>
                            Total Sampah yang Masuk Tiap Harinya
                        </h1>
                        <ChartTotalSampah />
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} h='10'>
                        <h1>
                            Komposisi Sampah yang Diolah
                        </h1>
                        <ChartSampahOlahan />
                    </GridItem>
                </Grid>
            </Box>
        </Container>
    );
}

export default Dashboard;