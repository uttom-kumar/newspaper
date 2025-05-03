const dataList = [
    {
        id: "1",
        image: "https://cdn.bdnews24.com/bdnews24/media/bangla/imgAll/2025May/SM/citizen-service-center-300425-01-1746038154.jpg",
        title: "এক প্ল্যাটফরমে সব নাগরিক সেবা দিতে চায় সরকার, উদ্যোক্তাদের আবেদনের আহ্বান"
    },
    {
        id: "2",
        image: "https://cdn.bdnews24.com/bdnews24/media/bdnews24/2023-12/7666761e-baac-4ad4-b9e2-4359a5bba578/coal_labour_aminbazar_161223_12.jpg",
        title: "শোষণহীন সমাজের স্বপ্ন, সংগ্রাম ও অধরা সাফল্য"
    },
    {
        id: "1",
        image: "https://cdn.bdnews24.com/bdnews24/media/bangla/imgAll/2025May/SM/citizen-service-center-300425-01-1746038154.jpg",
        title: "এক প্ল্যাটফরমে সব নাগরিক সেবা দিতে চায় সরকার, উদ্যোক্তাদের আবেদনের আহ্বান"
    },
    {
        id: "2",
        image: "https://cdn.bdnews24.com/bdnews24/media/bdnews24/2023-12/7666761e-baac-4ad4-b9e2-4359a5bba578/coal_labour_aminbazar_161223_12.jpg",
        title: "শোষণহীন সমাজের স্বপ্ন, সংগ্রাম ও অধরা সাফল্য"
    },
    {
        id: "1",
        image: "https://cdn.bdnews24.com/bdnews24/media/bangla/imgAll/2025May/SM/citizen-service-center-300425-01-1746038154.jpg",
        title: "এক প্ল্যাটফরমে সব নাগরিক সেবা দিতে চায় সরকার, উদ্যোক্তাদের আবেদনের আহ্বান"
    },
    {
        id: "2",
        image: "https://cdn.bdnews24.com/bdnews24/media/bdnews24/2023-12/7666761e-baac-4ad4-b9e2-4359a5bba578/coal_labour_aminbazar_161223_12.jpg",
        title: "শোষণহীন সমাজের স্বপ্ন, সংগ্রাম ও অধরা সাফল্য"
    },
    {
        id: "1",
        image: "https://cdn.bdnews24.com/bdnews24/media/bangla/imgAll/2025May/SM/citizen-service-center-300425-01-1746038154.jpg",
        title: "এক প্ল্যাটফরমে সব নাগরিক সেবা দিতে চায় সরকার, উদ্যোক্তাদের আবেদনের আহ্বান "
    },
    {
        id: "2",
        image: "https://cdn.bdnews24.com/bdnews24/media/bdnews24/2023-12/7666761e-baac-4ad4-b9e2-4359a5bba578/coal_labour_aminbazar_161223_12.jpg",
        title: "শোষণহীন সমাজের স্বপ্ন, সংগ্রাম ও অধরা সাফল্য"
    },
]

const swiperContainer = document.querySelector("swiper-container")

dataList.forEach((item) => {
    const slide = document.createElement("swiper-slide")
    slide.innerHTML = `
        <div class="card border-0 ">
            <a href="#" class="text-decoration-none text-dark">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-hover">${item.title}</h5>
                </div>
            </a>
        </div>
    `
    swiperContainer.appendChild(slide)
})
