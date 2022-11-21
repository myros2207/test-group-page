import {Box, Flex} from '@chakra-ui/react';
import React from 'react';

const HomeComponent = () => {
    return (
        <div id='Home'>
            <Box  h={"100vh"} pt={"-100px"} bg="#809ca6">
                <Flex flexDirection={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
                    Home
                </Flex>
                 </Box>
        </div>
    );
};

export default HomeComponent;;