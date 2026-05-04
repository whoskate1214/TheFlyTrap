// Where we put inputs
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
import tweetsData from "./data/tweets.json"
import type { Tweet } from "./types/tweet"
import { useState } from "react";

function App() {
  // Tweets is the current list of tweets shown
  // set tweets is how React updates all instances
  // We are starting with tweets from json file
  const [tweets, setTweets] = useState<Tweet[]>(tweetsData as Tweet[])

  // input is what is typed in the box, setInput is how we update it
  const [input, setInput] = useState("");

  // function to run when user clicks yap button
  const handleYapClick = () => {
    // if input is empty or white space, end function
    if(!input.trim()) return;
    const newTweet: Tweet = {
      id: Date.now(),
      name: "JoeSmoe",
      username: "@you",
      createdAt: new Date().toISOString(),
      text: input.trim(),
      likes: 0,
      replies: 0,
      tag: ""
    };
    // Puts new tweet first, then copy in old tweets
    setTweets([newTweet, ...tweets]);
    // clear input box after posting
    setInput("")
  }

  // Save the current time once during this render.
  const currentTime = new Date().toISOString();

  // Helper function that turns a date into "now", "2m", "3h", or "2d".
  const timeAgo = (iso?: string) => {
    if (!iso) return "now";
    const diff = new Date(currentTime).getTime() - new Date(iso).getTime();
    const sec = Math.floor(diff / 1000);
    if (sec < 60) return "now";
    const min = Math.floor(sec / 60);
    if (min < 60) return `${min}m`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}h`;
    const day = Math.floor(hr / 24);
    return `${day}d`;
  };


  return (
    <Box bg="gray.900" minH="100vh" py={8}>
      <Container maxW="650px">
        <VStack gap={5} align="stretch">
          <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="md">
            <Heading size="lg" color="white">
              🕸️ The Fly Trap 🪰
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
                value={input}
                onChange={(userInput) => setInput(userInput.target.value)}
              />
              <Button alignSelf="flex-end" bg="blue.500" color="white"
                onClick={handleYapClick}
              >
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
                      {tweet.username} · {timeAgo(tweet.createdAt)}
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