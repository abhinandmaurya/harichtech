const workData = [
  {
    id: 1,
    title: "Borem ipsum",
    description: "POREM IPSUM",
    image:
      "https://s3-alpha-sig.figma.com/img/03b0/2333/49433fca57205f164eaa53458c5f7028?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsfTIAc5BC3Ixp8N~CwFKC2IIJpVxI-VZ5SZalkHjB2FRkjUoNSKZiR7FGal1ZKW7Gh0ztm6hlkR6TP8B5gqFyeNSVA34uzOzyWUfI-NYY9FSXORCUyqi6C2mjKAxWj4YRiuHvA~ZPb0HUJzm~bgb5Mnmy3H9tb~yKV-jexG1lUt-Ks7IfRBIW6pdqCTPjabiZUQQRxxi7RpGeD5HmbBsYSB01uSZY1I4U4Lw0dIl9Vbnu2gOfMyYOYtHpSwjVm7xibRSeo2KuN3OlVy2zN-x~Pom2aoaXDGLH~ejSyYKHoyhJ6XWHaeVtAYdOxnalqxvCxx2i8PggRn1KzTkC02CQ__",
  },
  {
    id: 2,
    title: "Morem ipsum",
    description: "LOREM IPSUM",
    image:
      "https://s3-alpha-sig.figma.com/img/96f0/c1c1/e58db0f19717bde5dce62c1ac4d790f9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZrODY8dkqPtC7QNhvinw9ZeQWaN76awj0Epw7s-zUKd~QBRlvU9fV4D11uo79KRPMFecEEKP5NDEvMKzfpaoqW27rub~i67ZEUci2a4hNKg5OL0M3R8Opv2byRjcnAWMaZYLYxdsu72U2RvD3~OEh5FtvjMkdfe-YQ~iTblQGGoORXiLHapGuzaZwMUi9~ckgiNLA2M3qqRc6QOW9U3UN-HcRedrq7rontlUom0FUov66qol86vNARCpquUW9DVJSzK11zKHtp5aN8fHmJ04FdsBOtWbmaFtloQzzsVi9IkJfMRte-tXhUpgxh9PDiKLVAjxEL5pPInvmOqS~f1fA__",
  },
  {
    id: 3,
    title: "Horem ipsum",
    description: "GOREM IPSUM",
    image:
      "https://s3-alpha-sig.figma.com/img/a36f/b00b/0cc3a4ba00ca2d0d47a2ec7f4efb1b59?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZaQDb8WfeYkLDnooiNS0ZuRYTbOajocSJy~IESoBdlRGFFAdsdkB81Nic47a3AmWlnAFlN~Pm203wDTdhc66hEHk650BEUBbYVjJGK0VR7qTPTrnZ8Ihu2qLDyEwmda-wWnzeN0jL~5vWn3CTrDlVCS4ImALkHmPoJhOwC7wGkYHxUFTkxpOdkbe70RBDRAF9dlFsjy1RsNGkdy~JYIhTfaLbp9DS1~HXJZ4PDYiEWQwpREXmraMIWf8fgLk2cviKQYBbpKL1Dqs-owECJLoXUg7nqPW4hxTYpXkleK0eHlwxGM-vSJtYrz3P~cvnbsSFtCi3FNcgd7jz2155qy~sA__",
  },
  {
    id: 4,
    title: "Torem ipsum",
    description: "GOREM IPSUM",
    image:
      "https://s3-alpha-sig.figma.com/img/f1a4/9d0c/7bd4eec7bb68b5470cff873575bedddd?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pa1PjoEVqzrlTMLk1KogXK9EUNJt00jLu-74iVVno9OoDDnzcLdzGHglmCKI9b0V~uj7-YtF2a52gXRTjqe3i-NiIvhEzbiQpYSn0JWEi2yffRKZDjV2-I0AqJLHrAz~KCdSyW2sYMEB3HFzNJMUUeWbPPo-5isUppCap4S8ro6tbLpyEiYXS6Cq4lExsdDE2EM-oWv9m-1G3cGuWrFj7su4nSAxgOpdwkUH1PLA-dr8QGC0IGyBEMZZDN~htCZsOhFOe2tHG6K-S6XjArrwwgjXUoPVTUVELNMjVXVteiFFy0pijosZI~tzoOcEcfKwZf~H6d5v2RW7VgbMGj1Z6w__",
  },
  {
    id: 5,
    title: "Jorem ipsum",
    description: "LOREM IPSUM",
    image:
      "https://s3-alpha-sig.figma.com/img/aea5/dd01/49049490d4b182dde8914cd07b7998e4?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~tkZcrs8oWnCkA4vdzrNQg4UslT-DSYsRv6ovLxQiNY-4KIb-ueB7qIDQv-IcatqbhFBou6lRNxhTA5284~uiLzExqq6ZUAc3cxz1JqDit2FV50h1zzjFYv1~vFjGHHoHH04UAFB1~qops83KJtSpOdCzqe6EdrEOsul~lxkV8bQalPsAwvHD3ic3Qz9cixI4TaAyAOrEIsFfMHEHCK70DekUwPdTRBAM1ufd4UrZw7zNghr-rgOPsvAPjWSYfKmA-VHsCcjAnPUBaAWUndzStl5xP3aVlXJ3OB6~bxU3dzqBeNW9inY3jE4JLwj~vlr4Nk~u4WsV0ur2ZRXtV5VA__",
  },
];

export const fetchWorkData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(workData);
    }, 500);
  });
};
