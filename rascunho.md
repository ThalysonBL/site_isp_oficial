 {slides.map((item) => {
            return (
              <Flex justifyContent="center" flexDirection="column" key={item.id} className={styles.slides}>
                <Flex className={styles.containerSlider}>
                  <VStack
                    width="100%"
                    spacing="70px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    bg="blue"
                    mx="auto"
                  >
                    <HStack width="70%" justifyContent="space-between">
                      {item.img}
                    </HStack>
                    <HStack width="70%" justifyContent="space-between">
                      {item.imgLineTwo}
                    </HStack>
                    <HStack width="70%" justifyContent="space-between">
                      {item.imgLineThree}
                    </HStack>
                    <HStack width="70%" justifyContent="space-between">
                      {item.imgLineFour}
                    </HStack>
                  </VStack>
                </Flex>
                <Box mx="auto" pt="2rem" fontSize="20px" fontWeight="500">
                  {item.MaisProv}
                </Box>
              </Flex>
            );
          })}