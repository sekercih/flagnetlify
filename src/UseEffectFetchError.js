import React from "react";
import { useState, useEffect } from "react";
function UseEffectFetchError() {
  const [kisiler, setKisiler] = useState([]);
  const [hata, setHata] = useState(false);
  const [status, setStatus] = useState(200);
  const url = "https://api.github.com/users";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setStatus(res.status);
          setHata(true);
        }
      })
      .then((data) => setKisiler(data));
  }, []);
  if (!hata) {
    return (
      <div className="text-center">
        <h1>Github Kullanicilari</h1>
        {kisiler.map((kisi) => {
          return (
            <div key={kisi.id}>
              <h2>{kisi.login}</h2>
              <img src={kisi.avatar_url} alt="" width="150px" />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="bg-danger text-center mt-5">
        <h1>Veriler Cekilemedi</h1>
        <h2 className="text-light">Status Kod:{status}</h2>
      </div>
    );
  }
}
export default UseEffectFetchError;
