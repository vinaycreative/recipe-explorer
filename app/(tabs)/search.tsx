import { Padded } from "@/components/layout"
import { useDiscoveryMeals, useSearchMeals } from "@/features/recipes"
import { mealImageUrl } from "@/features/recipes/utils/meal-image"
import { useDebouncedValue } from "@/hooks/use-debounced-value"
import { Image } from "expo-image"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ArrowRight, ChevronDown, Clock, Search, Star, X } from "lucide-react-native"
import { useState } from "react"
import { Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const FILTERS = ["Beef", "Chicken", "Dessert", "Vegetarian"]

export default function SearchScreen() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebouncedValue(query, 350)

  const isSearching = debouncedQuery.trim().length >= 2

  const searchQuery = useSearchMeals(debouncedQuery, "name")
  const discoveryQuery = useDiscoveryMeals()

  const results = isSearching ? (searchQuery.data ?? []) : (discoveryQuery.data ?? [])
  const isLoading = isSearching ? searchQuery.isLoading : discoveryQuery.isLoading

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-background-dark" edges={["top"]}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        stickyHeaderIndices={[1]}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
      >
        {/* 0th element: Title (Scrolls away) */}
        <View className="px-6 pt-4 pb-2">
          <Text className="font-serif text-3xl text-foreground">Search</Text>
        </View>

        {/* 1st element: Sticky Search Bar */}
        <View className="bg-[#F1EFEA] px-6 py-2">
          <View className="flex-row items-center bg-[#F1EFEA] rounded-2xl px-4 py-3.5">
            <Search size={20} color="#8a8175" />
            <TextInput
              className="flex-1 font-sans text-base text-foreground ml-3"
              placeholder="Ingredients, dishes, cuisines..."
              placeholderTextColor="#8a8175"
              value={query}
              onChangeText={setQuery}
              style={(Platform.OS === "web" ? { outlineStyle: "none" } : undefined) as any}
            />
            {query.length > 0 && (
              <Pressable onPress={() => setQuery("")} className="bg-[#b3afa6] rounded-full p-0.5">
                <X size={14} color="white" />
              </Pressable>
            )}
          </View>
        </View>

        {/* 2nd element: Filters Row */}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              gap: 12,
              paddingBottom: 16,
              paddingTop: 12,
            }}
          >
            {FILTERS.map((f) => (
              <Pressable
                key={f}
                className="bg-[#F4F2EE] px-4 py-2.5 rounded-full"
                onPress={() => setQuery(f)}
              >
                <Text className="font-sans text-foreground">{f}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Results Header */}
        <Padded className="flex-row items-center justify-between mb-6 mt-2">
          <Text className="font-sans text-foreground-muted text-sm">
            {isLoading ? "Searching..." : `${results.length} results found`}
          </Text>
          <Pressable className="flex-row items-center gap-1.5">
            <Text className="font-sans-medium text-accent text-sm">Relevance</Text>
            <ChevronDown size={14} color="#c45c3e" />
          </Pressable>
        </Padded>

        {/* Results List */}
        <Padded className="gap-6">
          {results.map((meal) => (
            <Pressable
              key={meal.id}
              className="flex-row gap-5"
              onPress={() => router.push(`/recipe/${meal.id}`)}
            >
              <Image
                source={{ uri: mealImageUrl(meal.thumbnail, "small") }}
                style={{ width: 120, height: 120, borderRadius: 24 }}
                contentFit="cover"
                transition={200}
              />
              <View className="flex-1 justify-center py-1">
                <Text
                  className="font-serif-semibold text-[22px] leading-tight text-foreground mb-2.5"
                  numberOfLines={2}
                >
                  {meal.name}
                </Text>

                <View className="flex-row items-center gap-4 mb-3">
                  <View className="flex-row items-center gap-1.5">
                    <Clock size={14} color="#8a8175" />
                    <Text className="font-sans text-sm text-foreground-muted">10 min</Text>
                  </View>
                  <View className="flex-row items-center gap-1.5">
                    <Star size={14} color="#c45c3e" fill="#c45c3e" />
                    <Text className="font-sans text-sm text-foreground-muted">4.9</Text>
                  </View>
                </View>

                <View className="flex-row items-center gap-1.5 mt-1">
                  <Text className="font-sans-semibold text-sm text-accent">View Recipe</Text>
                  <ArrowRight size={14} color="#c45c3e" />
                </View>
              </View>
            </Pressable>
          ))}
        </Padded>
      </ScrollView>
    </SafeAreaView>
  )
}
