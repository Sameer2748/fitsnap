const Exercise = () => {
  return (
    <div className="w-full h-auto">
      <div className="m-2 pt-2 pl-2">
        <div className="flex flex-row justify-center items-center rounded-3xl bg-white w-1/4 h-20 pl-3">
          <img
            className="w-10 h-10 1"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/subscription-3198452-2662183.png?f=webp&w=256"
            alt=""
          />

          <div className="flex flex-col w-full m-2">
            <h1 className="text-xl text-gray-700 font-semibold">100+ new users enrolled</h1>
            <p className="text-gray-500  text-sm">
              join now to get 20% instant discount
            </p>
          </div>
        </div>
      </div>
      <div className="pl-3 pr-2 relative">
        <div className="flex flex-col justify-center items-center text-blue-950 pt-5 ">
          <h1 className="text-2xl font-semibold">BarBell Bicep Curl</h1>
          <p className="">
            the barbell curl is a classic and effective biceps excrecise he
            mussceles in the front of the upper arms.
          </p>
        </div>
        <div className="w-full "  style={{ 
  backgroundImage: "url('https://media.gq.com/photos/5a3d41215f1f364364dd437a/16:9/w_1280,c_limit/ask-a-trainer-bicep-curl.jpg')",
  backgroundPosition: "29rem 11rem", // Adjust this property to position the background image
  backgroundRepeat: "no-repeat",
  backgroundSize: "30%",
  borderRadius: "20px"

}}>

          <div className="w-full flex flex-row justify-between p-20">
            <div className=" flex w-1/3 flex-col p-2 gap-1">
              <h1 className="text-blue-900 text-xl font-semibold">Bicep development</h1>
              <p className="">
                he barbell bicep curl specifically targets the biceps brachii,
                contributing to their development and definition
              </p>
            </div>
            <div className=" flex w-1/3  flex-col p-2">
              <h1 className="text-blue-900 text-xl font-semibold">
                Increased muscle engagement{" "}
              </h1>
              <p>
                By maintaining strict form and controlling the weight, you
                ensure that the biceps are doing the majority of the work,
                leading to better muscle engagement and growth.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between p-20">
            <div className=" flex w-1/3  flex-col p-2 gap-1">
              <h1 className="text-blue-900 text-xl font-semibold">Strength Building</h1>
              <p>
                he barbell bicep curl specifically targets the biceps brachii,
                contributing to their development and definition
              </p>
            </div>
            <div className=" flex w-1/3  flex-col p-2">
              <h1 className="text-blue-900 text-xl font-semibold">Compound Movement</h1>
              <p>
                While primarily an isolation exercise for the biceps, the
                barbell curl involves other muscles to a lesser extent, such as
                the forearms, shoulders, and upper back. This makes it a
                compound movement that engages multiple muscle groups
              </p>
            </div>
          </div>

          <div className="flex flex-col w-1/2 gap-1 pl-10" style={{ marginLeft: "200px" }} >
            <div className="flex flex-col gap-1 p-10 ">
              <h1 className="text-xl text-blue-900 font-semibold">About the Excercise</h1>
              <p>
                The barbell curl is a classic and effective bicep exercise that
                targets the muscles in the front of your upper arms,
                specifically the biceps brachii. Barbell curls into your workout
                routine can help develop and strengthen your biceps,
                contributing to overall arm strength and aesthetics
              </p>
            </div>
            <div className="flex flex-col gap-2 p-10">
              <h1 className="text-xl text-blue-900 font-semibold">Traget Area</h1>
              <p className="text-gray-700">Biceps brachii and forearm muscles</p>
              <h1 className="text-xl text-blue-900 font-semibold">Level for difficulty</h1>
              <p className="text-gray-700">Beginner friendly </p>
              <h1 className="text-xl text-blue-900 font-semibold">Number of set</h1>
              <p className="text-gray-700">3</p>
              <h1 className="text-xl text-blue-900 font-semibold">Duration </h1>
              <p className="text-gray-700">20 min</p>
              <h1 className="text-xl text-blue-900 font-semibold">Calories burn</h1>
              <p className="text-gray-700">150cal</p>
              <h1 className="text-xl text-blue-900 font-semibold">Equipment needed</h1>
              <p className="text-gray-700">Barbell</p>
              <h1 className="text-xl text-blue-900 font-semibold">Instruction to perform</h1>
              <ul className="text-gray-700 list-disc pl-5">
                <li>Stand up straight with your feet shoulder-width apart.</li>
                <li>
                  Hold a barbell with a shoulder-width grip, palms facing
                  forward (an underhand grip).
                </li>
                <li>
                  Your hands should be positioned slightly wider than your
                  shoulders.
                </li>
                <li>
                  Keep your wrists straight and aligned with your forearms.
                </li>
                <li>Maintain a straight back, chest up, and shoulders back.</li>
                <li>
                  While keeping your upper arms stationary, exhale and curl the
                  barbell towards your shoulders by flexing your elbows.
                </li>
                <li>
                  Focus on contracting your biceps throughout the movement.
                </li>
                <li>
                  Inhale and slowly lower the barbell back to the starting
                  position with controlled movement.
                </li>
                <li>
                  Maintain tension on the biceps during the descent; do not let
                  the weight drop.
                </li>
              </ul>

              <h1 className="text-xl text-blue-900 font-semibold">Tips</h1>
              <ul className="text-gray-700 list-disc pl-5">
                <li>
                  Avoid using momentum by keeping your body still. Focus on
                  isolating the biceps.
                </li>
                <li>
                  Use a weight that allows you to maintain proper form and
                  control throughout the exercise.
                </li>
                <li>
                  Ensure a full range of motion, allowing your arms to fully
                  extend at the bottom and flex at the top.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
