import {Box, Flex, Grid} from '@chakra-ui/react';
import React from 'react';

const PortfolioComponent = () => {
    return (
        <div id='Portfolio'>
            <Box h={"100vh"} bg="#f0efe8"> <Flex color={"#809ca6"} flexDirection={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
                Portfolio
            </Flex>
                <Grid templateColumns='repeat(5, 1fr)'>

                </Grid>
            </Box>

        </div>
    );
};

export default PortfolioComponent;