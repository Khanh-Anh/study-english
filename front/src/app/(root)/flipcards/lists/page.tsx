import ListFlipcard from "@/components/organisms/flash-card-list";
import { FlipCardInterface } from "@/types/flipCard";

function List() {
  const flipCardList: FlipCardInterface[] = [
    {
      vocabulary: "serendipity",
      pronunciation: "ˌserənˈdipədē",
      definition: "The occurrence of events by chance in a happy or beneficial way.",
      example: "They found each other by pure serendipity."
    },
    {
      vocabulary: "ephemeral",
      pronunciation: "əˈfem(ə)rəl",
      definition: "Lasting for a very short time.",
      example: "Fame in the digital age can be ephemeral."
    },
    {
      vocabulary: "quintessential",
      pronunciation: "ˌkwin(t)əˈsen(t)SHəl",
      definition: "Representing the most perfect or typical example of a quality or class.",
      example: "He was the quintessential Renaissance man."
    },
    {
      vocabulary: "ubiquitous",
      pronunciation: "yo͞oˈbikwədəs",
      definition: "Present, appearing, or found everywhere.",
      example: "Smartphones have become ubiquitous in modern society."
    },
    {
      vocabulary: "alacrity",
      pronunciation: "əˈlakrədē",
      definition: "Brisk and cheerful readiness.",
      example: "She accepted the invitation with alacrity."
    }
  ];
  return (
    <div className="flex gap-3 justify-content-between flex-wrap">
      <ListFlipcard listFlipcard={flipCardList} />
    </div>
  );
}

export default List;
