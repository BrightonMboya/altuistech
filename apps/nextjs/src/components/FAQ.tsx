import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col lg:w-[80%] lg:mt-5">
      <Accordion type="single" collapsible className="mt-5">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is Emotions and how does it work?
          </AccordionTrigger>
          <AccordionContent>
            Emotions is a resource-rich mental health mobile application that
            provides adequate access to mental health services for youths, young
            adults, children, and aged people who are keen on improving their
            mental well-being.
            <br />
            <br />
            It is filled with music, games, videos, and exercises that are
            tailored to address mental health disorders such as anxiety,
            depression, PTSD, stress, drug and alcohol addictions, and other
            mental health disorders. Emotions also provides a free mental health
            assessment for users and give them recommendations to qualified
            mental health professionals across Africa based on their test
            results.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can I connect with a mental health therapist?
          </AccordionTrigger>
          <AccordionContent>
            You can connect with a mental health professional on our platform by
            doing the free mental health assessment test on the screening page,
            and based on your test, the app will recommend you to resources or
            directly to a mental health professional. Alternatively, you can
            access a mental health professional under the available mental
            health professionals page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Are the mental health tests on Emotions accurate?
          </AccordionTrigger>
          <AccordionContent>
            The mental health tests are 100 percent accurate and approved by
            mental health professionals, and we are using the Problem Management
            + (PM+) and Cognitive Behavioral Therapy (CBT) models.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is Emotions free to use?</AccordionTrigger>
          <AccordionContent>
            We have a freemium (free) model with limited access to resources and
            mental health professionals. We also have a premium (paid)
            subscription model that gives unlimited access to resources, mental
            health professionals, and more features such as podcasts,
            journaling, and a virtual relaxation room.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I join multiple mental health groups on Emotions?
          </AccordionTrigger>
          <AccordionContent>
            Yes. You can create your community and add your friends, and also
            join multiple groups based on your mental health status or disorder.
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="item-3">
          <AccordionTrigger>
            Is my privacy protected on Emotion?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How can I provide feedback or report issues with the Emotions app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </div>
  );
}
