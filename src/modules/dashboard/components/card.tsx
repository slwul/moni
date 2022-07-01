import { Box, Circle, Grid, GridItem, Heading, Icon, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { FiMap } from "react-icons/fi";
import { RiDashboardLine, RiGroupLine } from "react-icons/ri";

const dataCard = [
    {
      id: "1",
      title: "Total Rumah yang Termonitor",
      description: "This is a summary, can be any description",
      icon: FiMap,
      href: "/maps"
    },
    {
      id: "2",
      title: "Total Satgas",
      description: "This is a summary, can be any description",
      icon: RiDashboardLine,
      href: "/dashboard"
    },
    {
      id: "3",
      title: "Total Bank Sampah",
      description: "This is a summary, can be any description",
      icon: RiGroupLine,
      href: "/anggota"
    }
  ];

function Card(): JSX.Element{
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6} w="100%">
            {dataCard.map((item) => {
                return(
                    <GridItem key={item.id}>
                        <LinkBox>
                            <Box
                                p={1}
                                display={{ md: 'flex' }}
                                border="1px solid"
                                borderColor="gray.300"
                                borderRadius="md"
                                _hover={{
                                    borderColor: 'gray.300',
                                    cursor: 'pointer',
                                    backgroundColor: 'gray.100',
                                }}>
                                <Box flexShrink={0} my="auto">
                                    <Circle size='3em' bg='teal.600' color='white'>
                                        <Icon boxSize="1em" as={item.icon} display="block" />
                                    </Circle>
                                </Box>
                                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                                    <Heading
                                        fontWeight='bold'
                                        textTransform='uppercase'
                                        fontSize='md'
                                        letterSpacing='wide'
                                        color='teal.600'
                                    >
                                        <LinkOverlay href={item.href}>
                                            {item.title}
                                        </LinkOverlay>
                                    </Heading>
                                    <Text mt={2} color='gray.500'>
                                        {item.description}
                                    </Text>
                                </Box>
                            </Box>
                        </LinkBox>
                    </GridItem>
                )
            })}
        </Grid>
    );
}

export default Card;