export default function Testimonials() {
  return (
    <div class="container mx-auto max-w-6xl p-4">
      <h3 class="text-gray-800 py-6 text-3xl text-center font-bold">
        Testimonials
      </h3>
      <div class="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
        <div class="animate-in zoom-in duration-200">
          <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
            <div class="flex flex-col break-inside-avoid-page z-0 relative">
              <div class="flex justify-between w-full">
                <div class="flex space-x-6">
                  <div class="flex space-x-4 flex-shrink-0 w-full">
                    <img
                      src="https://theemcoe.org/images/3.jpg"
                      class="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div class="font-semibold">Rahul Giri</div>
                      <div class="text-sm w-full">
                        (Second topper in MU-Automobile) Owner (Giri Tutorials)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p class="whitespace-pre-line break-inside-avoid-page  text-[#000]">
                "From the bottom of my heart I would like to thank all my
                professors of Automobile who guided me throughout my career and
                showered their love upon me. Thank you "THEEM COLLEGE" for all
                your support. Without this college probably I could not have won
                Silver Medal in Mumbai University."
              </p>
            </div>
          </div>
        </div>

        <div class="animate-in zoom-in duration-200">
          <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
            <div class="flex flex-col break-inside-avoid-page z-0 relative">
              <div class="flex justify-between">
                <div class="flex space-x-6">
                  <div class="flex space-x-4 flex-shrink-0 w-full">
                    <img
                      src="https://theemcoe.org/images/1.jpg"
                      class="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div class="font-semibold">Pradeep Mule</div>
                      <div class="text-sm">
                        (Alumni-EXTC-84%) - Designer at Cisco Pvt. Ltd.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="whitespace-pre-line break-inside-avoid-page  text-[#000]">
                <span>
                  "Theem college was not just an institute but an integral part
                  of my life. It groomed me on all frontiers and I am grateful
                  to my college as it enabled me to reach my goals."
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="animate-in zoom-in duration-200">
          <div class="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
            <div class="flex flex-col break-inside-avoid-page z-0 relative">
              <div class="flex justify-between">
                <div class="flex space-x-6">
                  <div class="flex space-x-4 flex-shrink-0 w-52">
                    <img
                      src="https://theemcoe.org/images/2.jpg"
                      class="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div class="font-semibold">Sharanya Shenoy</div>
                      <div class="text-sm">
                        (Second topper in MU-I.T.) - Product Engineer at
                        Intellect Design Arena Ltd.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p class="whitespace-pre-line break-inside-avoid-page  text-[#000]">
                <span>
                  "The support I received from our Principal sir and HOD sir was
                  immensely helpful. I would like to thank all my Professors for
                  always encouraging me to perform well."
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
