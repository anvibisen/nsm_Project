const tableResponseData = [
  {
    id: "RRM0010",
    templateName: "Satın Alma Sözleşmesi",
    modelType: "Purchase Agreement",
    dateTime: "17.06.2021 | 10:30",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: true,
  },
  {
    id: "RRM0006",
    templateName: "Gizlilik Sözleşmesi",
    modelType: "Non-Disclosure Agreement",
    dateTime: "19.08.2019 | 11:15",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: true,
  },
  {
    id: "RRM0013",
    templateName: "Tedarik Sözleşmesi",
    modelType: "Supply Agreement",
    dateTime: "21.12.2021 | 11:00",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: true,
  },
  {
    id: "RRM0008",
    templateName: "Franchise Sözleşmesi",
    modelType: "Franchise Agreement",
    dateTime: "07.01.2021 | 15:45",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0003",
    templateName: "Yatırım Sözleşmesi",
    modelType: "Investment Agreement",
    dateTime: "22.07.2016 | 14:45",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0011",
    templateName: "İşbirliği Sözleşmesi",
    modelType: "Partnership Agreement",
    dateTime: "08.08.2021 | 12:00",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0014",
    templateName: "Patent Lisans Sözleşmesi",
    modelType: "Patent License Agreement",
    dateTime: "05.01.2022 | 13:30",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0005",
    templateName: "Ticari Kredi Sözleşmesi",
    modelType: "Commercial Loan Agreement",
    dateTime: "05.05.2018 | 16:00",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0009",
    templateName: "İş Sözleşmesi",
    modelType: "Employment Contract",
    dateTime: "23.03.2021 | 09:00",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0012",
    templateName: "Kiracılık Sözleşmesi",
    modelType: "Lease Agreement",
    dateTime: "14.10.2021 | 14:30",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0001",
    templateName: "Akaryakıt İstasyonu Kira Sözleşmesi",
    modelType: "Share Purchase Contract",
    dateTime: "27.10.2014 | 12:30",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0007",
    templateName: "Hizmet Sözleşmesi",
    modelType: "Service Contract",
    dateTime: "29.09.2020 | 13:20",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0015",
    templateName: "Hisse Devri Sözleşmesi",
    modelType: "Share Transfer Agreement",
    dateTime: "27.04.2022 | 16:00",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0002",
    templateName: "Gayrimenkul Satış Sözleşmesi",
    modelType: "Real Estate Contract",
    dateTime: "15.03.2015 | 10:00",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
  {
    id: "RRM0004",
    templateName: "Distribütörlük Sözleşmesi",
    modelType: "Distribution Agreement",
    dateTime: "11.11.2017 | 09:30",
    modelDescription: "Çalışanın işverene bağlı olarak iş görmesine, işverenin ise sözleşmede kararlaştırılan ücreti sözleşmenin hüküm ve koşullarına uygun olarak çalışana ödemesine yönelik tarafların hak ve yükümlülüklerinin belirlenmesidir.",
    modelPreference: "İşveren Lehine | Belirsiz Süreli | Beyaz Yaka | Tam Zamanlı",
    starred: false,
  },
];

const breadcrumbroutes = [
  {
    path: "Client",
  },
  {
    path: "Matter",
  },
  {
    path: "Collections",
  },
];

export { tableResponseData, breadcrumbroutes };
