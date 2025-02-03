import Swal from "sweetalert2";
import DefaultLayout from "../Layout/DefautLayout";
const Review = () => {
  const onSubmit = async(event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "e25c6222-d57e-4713-9ea8-3a6ee73c7fbf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      const isDarkmode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      Swal.fire(
        {
          position: "top-end",
          icon: "success",
          title: "Email anda sudah terkirim..",
          showConfirmButton: true,
          background: isDarkmode ? '#1e1e1e' : '#ffffff',
          confirmButtonColor: isDarkmode ? '#FFE786' : '#1e1e1e',
          color: isDarkmode ? '#ffffff': '#1e1e1e',
          iconColor: isDarkmode ? '#FFE786' : '#1e1e1e',
        }
      )
    } else {
      const isDarkmode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        background: isDarkmode ? '#1e1e1e' : '#ffffff',
        confirmButtonColor: isDarkmode ? '#FFE786' : '#1e1e1e',
        color: isDarkmode ? '#ffffff': '#1e1e1e',
        iconColor: isDarkmode ? '#FFE786' : '#1e1e1e',
      });
    }
  };

return(
<DefaultLayout>
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg">
    <h1 class="text-center text-2xl font-bold sm:text-3xl text-white">Bagaimana Pelayanan website whizzy ??</h1>

    <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
    "Suaramu, Inspirasi Kami! 🎧💡"
    </p>
    <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
    Bagikan ulasan dan saranmu untuk membuat Whizzy semakin seru! Pendapatmu membantu kami menghadirkan pengalaman audiobook terbaik untuk Gen Z. 🚀💙
    </p>
    <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={onSubmit}>
      <div>
        <label for="email" class="sr-only">Nama</label>

        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-white"
            placeholder="Masukkan Nama"
            name="name"
          />
        </div>
      </div>

      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-white"
            placeholder="Masukkan email"
            name="email"
          />
        </div>
      </div>
<div>
  <textarea
    className="mt-2 w-full rounded-lg p-4 pe-12 border-gray-200 sm:text-sm text-sm shadow-sm text-white"
    rows="4"
    placeholder="Masukkan Saran dan Kritikan anda.."
    name="message"
  ></textarea>
</div>

      <button
        type="submit"
        class="block w-full rounded-lg bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
      >
      Kirim Saran
      </button>
    </form>
  </div>
</div>
</DefaultLayout>
    )
}

export default Review;