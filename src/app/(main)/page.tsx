import home from "../../public/home.png";
import form from "../../public/form.jpg";
import Image from "next/image";
import { MessageSquare, Share2, ThumbsUp } from "lucide-react";
import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";
import { Textarea } from "../_components/ui/textarea";

export default function Home() {
  return (
    <>
      <main>
        <div className="h-screen  p-5 bg-background text-foreground max-w-lg ">
          <div>
            <div className="flex space-x-3">
              <Image src={home} alt="home" className="size-7" />
              <h1> Hamza Alhaj</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              similique quidem eos sed quia perspiciatis, voluptatem quisquam
              architecto aliquid blanditiis!
            </p>
          </div>
          <Image src={form} alt="form" />
          <div className="flex my-4 space-x-4">
            <ThumbsUp />
            <MessageSquare />
            <Share2 />
          </div>
          <Textarea />
          <Button>Submit</Button>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </main>
    </>
  );
}
