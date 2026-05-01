import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

function App() {
  const tweets = [
    {
      name: "Maya Johnson",
      username: "@maya_codes",
      time: "2m",
      text: "Just got my first React page running. Components are starting to make sense.",
      likes: 14,
      replies: 3,
      tag: "Web Dev",
    },
    {
      name: "Ethan Brooks",
      username: "@ethanbuilds",
      time: "12m",
      text: "Hardcoding data first helps me focus on the page layout before adding real input.",
      likes: 22,
      replies: 5,
      tag: "React",
    },
    {
      name: "Ava Smith",
      username: "@ava_secure",
      time: "25m",
      text: "A .map() lets us turn an array of data into repeated cards on the screen.",
      likes: 31,
      replies: 8,
      tag: "Cyber 301",
    },
  ];

  return (
    <Box bg="gray.900" minH="100vh" py={8}>
      <Container maxW="650px">
        <VStack gap={5} align="stretch">
          <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="md">
            <Heading size="lg" color="white">
              The Fly Trap
            </Heading>
            <Text color="gray.400" mt={2}>
              A simple Twitter-style homepage built with React and Chakra UI.
            </Text>
          </Box>

          <Box bg="gray.800" p={5} borderRadius="2xl" boxShadow="md">
            <VStack gap={3} align="stretch">
              <Text fontWeight="bold" color="white">
                Create a post
              </Text>
              <Input
                placeholder="What's happening?"
                bg="gray.700"
                borderColor="gray.600"
                color="white"
              />
              <Button alignSelf="flex-end" bg="blue.500" color="white">
                Yap
              </Button>
            </VStack>
          </Box>

          {tweets.map((tweet) => (
            <Box
              key={tweet.username}
              bg="gray.800"
              p={5}
              borderRadius="2xl"
              boxShadow="md"
              border="1px solid"
              borderColor="gray.700"
            >
              <VStack align="stretch" gap={3}>
                <HStack justify="space-between" align="start">
                  <Box>
                    <HStack>
                      <Text fontWeight="bold" color="white">
                        {tweet.name}
                      </Text>
                      <Badge colorPalette="blue">{tweet.tag}</Badge>
                    </HStack>
                    <Text color="gray.400" fontSize="sm">
                      {tweet.username} · {tweet.time}
                    </Text>
                  </Box>
                </HStack>

                <Text color="white">{tweet.text}</Text>

                <HStack gap={6} color="gray.400" fontSize="sm">
                  <Text>💬 {tweet.replies}</Text>
                  <Text>❤️ {tweet.likes}</Text>
                  <Text>🔁 Share</Text>
                </HStack>
              </VStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default App;