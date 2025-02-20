/** @jsxImportSource solid-js */
import { createSignal, For, type Component, type Accessor } from "solid-js";

interface AccordionItem {
  question: string;
  answer: string;
  category: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: Component<AccordionProps> = (props) => {
  const [openIndex, setOpenIndex] = createSignal<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex() === index ? null : index);
  };

  return (
    <div class="w-full space-y-4">
      <For each={props.items}>
        {(item: AccordionItem, index: Accessor<number>) => (
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <button
              class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => toggleItem(index())}
            >
              <span class="font-medium text-gray-900">{item.question}</span>
              <span class="ml-6">
                <svg
                  class={`w-6 h-6 transform transition-transform ${
                    openIndex() === index() ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              class={`px-6 py-4 bg-gray-50 transition-all duration-200 ease-in-out ${
                openIndex() === index() ? "block" : "hidden"
              }`}
            >
              <p class="text-gray-700">{item.answer}</p>
              <span class="inline-block mt-2 text-sm text-gray-500">
                Categoría: {item.category}
              </span>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default Accordion;
