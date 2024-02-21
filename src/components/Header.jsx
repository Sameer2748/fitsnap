const Header = () => {
  return (
    <div className=" w-full flex flex-row justify-between items-center bg-blue-950 text-white p-3">
      <div className="flex-1 pl-3">

        <img className="w-20 h-20"
        src="https://s3-alpha-sig.figma.com/img/67ca/bd5c/0096d57a42309326e743a6d00c786758?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fc8vRvsbes07mgdw2CRSYsOobTGCvAjC8F68THYCxe1scLASXlrt2b~4LQuv9teAp1T0DF-6XkkgWFlWHguDs8uOHVV~nkkekKX1r4K5CwsLHUg5s6H2diPm2HdfZyYmydh1ofj2I292gQVRADnxBJ7tXuwfYGH36vJBD1qsbwqtyibBhaagmAbhF43tPOxJnk2DQbOyCUdixpNKPGuhztkmk-xObT4nWBJrxi80kyj1prMOM4jxWKy7McG1PqnJyd0LNqKgY0ctKk0SMnqKdOFZ1uO8UFnzZpzRX8ZhrGD1fxJjwI6Hvg3Al6QwKzr0p~lZLXoLPW13nSDQkuzjgQ__"
          alt="logo"
          style={{ backgroundColor: 'transparent' }} // Ensure the image background is transparent
        />
      </div>
      <div className="w-50 flex flex-1 flex-row items-center justify-between ">
        <ul className="flex flex-row ">
          <li className="pl-9">Home</li>
          <li className="pl-9">Workout Plan</li>
          <li className="pl-9">AI Tracker</li>
          <li className="pl-9">Exercise</li>
          <li className="pl-9">About</li>
          <div className="bg-gray-800 w-1/6 pr-4  flex flex-row  items-center rounded justify-between">
            <img
              className="pr-1"
              width={30}
              height={20}
              src="https://cdn.iconscout.com/icon/free/png-512/free-user-1556-528036.png?f=webp&w=256"
              alt="logo"
            />
            <p className="pr-2">Sameer</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
