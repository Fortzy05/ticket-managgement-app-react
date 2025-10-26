import CreateTicketForm from "../components/CreateTicketForm";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
export default function CreateTicket() {
  return (
    <main>
        <Header/>
      <CreateTicketForm />
      <Footer/>
    </main>
  );
}
