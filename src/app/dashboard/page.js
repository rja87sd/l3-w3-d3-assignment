import CardMain from "../components/Card/CardMain";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function dashboard() {
  return (
    <main>
      <NavigationBar />
      <div className="flex flex-wrap justify-evenly">
        <CardMain
          title="Movies"
          desc="Here you'll find a list of my favorite films."
          src={"/film.png"}
          alt={"An image of film spilled onto a desk"}
        />

        <CardMain
          title="Books"
          desc="Here you'll find a list of my favorite books."
          src={"/books.png"}
          alt={"An image of open books piled together"}
        />

        <CardMain
          title="Bands"
          desc="Here you'll find a list of my favorite bands."
          src={"/bands.png"}
          alt={"An image of film spilled onto a desk"}
        />
      </div>
      <Footer />
    </main>
  );
}
