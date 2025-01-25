const servicesData = [
  {
    id: 1,
    title: "High Performance",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    iconColor: "#007BFF",
    image:
      "https://s3-alpha-sig.figma.com/img/6fed/659e/8299240d685b597deda4835366f06f6e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTdwblim57p5hcipdXqjqHg3KnKK7tlowi0a9zI3nUFnC5ogQX3~kNHmoiKFVkLevNCqzrTgRWPTpnfC-mYIYm2r97DCD5IkaKsFYthdAmRLAffttSHTWWv89MLu25F5hskbYb7MPcg~WdoB7K6Mp8bDZuV9NvkrsE~urf2Nhx8IH~ThsUbIerlvrcnWUfLQ3ixM1K6CWobTNcEFWmdsnEX8Onb9V9I0wSMPufpD5ysJh325wxHIuhe-NcPGzKP-uqE-aP-0VbkUEYyrWaKLJfZQh0f1JpKR9MAV164h~GOgVVgxzeMepmGesh2pI352ceVmBrZbvAJ4Mnv1L7Inwg__",
  },
  {
    id: 2,
    title: "High Quality",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    iconColor: "#28A745",
    image:
      "https://s3-alpha-sig.figma.com/img/6fed/659e/8299240d685b597deda4835366f06f6e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTdwblim57p5hcipdXqjqHg3KnKK7tlowi0a9zI3nUFnC5ogQX3~kNHmoiKFVkLevNCqzrTgRWPTpnfC-mYIYm2r97DCD5IkaKsFYthdAmRLAffttSHTWWv89MLu25F5hskbYb7MPcg~WdoB7K6Mp8bDZuV9NvkrsE~urf2Nhx8IH~ThsUbIerlvrcnWUfLQ3ixM1K6CWobTNcEFWmdsnEX8Onb9V9I0wSMPufpD5ysJh325wxHIuhe-NcPGzKP-uqE-aP-0VbkUEYyrWaKLJfZQh0f1JpKR9MAV164h~GOgVVgxzeMepmGesh2pI352ceVmBrZbvAJ4Mnv1L7Inwg__",
  },
  {
    id: 3,
    title: "Reliability",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    iconColor: "#FFC107",
    image:
      "https://s3-alpha-sig.figma.com/img/6fed/659e/8299240d685b597deda4835366f06f6e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTdwblim57p5hcipdXqjqHg3KnKK7tlowi0a9zI3nUFnC5ogQX3~kNHmoiKFVkLevNCqzrTgRWPTpnfC-mYIYm2r97DCD5IkaKsFYthdAmRLAffttSHTWWv89MLu25F5hskbYb7MPcg~WdoB7K6Mp8bDZuV9NvkrsE~urf2Nhx8IH~ThsUbIerlvrcnWUfLQ3ixM1K6CWobTNcEFWmdsnEX8Onb9V9I0wSMPufpD5ysJh325wxHIuhe-NcPGzKP-uqE-aP-0VbkUEYyrWaKLJfZQh0f1JpKR9MAV164h~GOgVVgxzeMepmGesh2pI352ceVmBrZbvAJ4Mnv1L7Inwg__",
  },
  {
    id: 4,
    title: "Customer Support",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    iconColor: "#DC3545",
    image:
      "https://s3-alpha-sig.figma.com/img/6fed/659e/8299240d685b597deda4835366f06f6e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTdwblim57p5hcipdXqjqHg3KnKK7tlowi0a9zI3nUFnC5ogQX3~kNHmoiKFVkLevNCqzrTgRWPTpnfC-mYIYm2r97DCD5IkaKsFYthdAmRLAffttSHTWWv89MLu25F5hskbYb7MPcg~WdoB7K6Mp8bDZuV9NvkrsE~urf2Nhx8IH~ThsUbIerlvrcnWUfLQ3ixM1K6CWobTNcEFWmdsnEX8Onb9V9I0wSMPufpD5ysJh325wxHIuhe-NcPGzKP-uqE-aP-0VbkUEYyrWaKLJfZQh0f1JpKR9MAV164h~GOgVVgxzeMepmGesh2pI352ceVmBrZbvAJ4Mnv1L7Inwg__",
  },
];

export const getServices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(servicesData), 1000);
  });
};
