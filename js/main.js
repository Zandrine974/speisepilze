const personen = [
    { vorname: "Jana", nachname: "Arnold", abteilung: "Webentwicklung", nr: "800571660" },
    { vorname: "Donald", nachname: "Duck", abteilung: "F&B", nr: "800571661" },
    { vorname: "Daisy", nachname: "Duck", abteilung: "Design", nr: "800571662" },
    { vorname: "Mickey", nachname: "Mouse", abteilung: "Marketing", nr: "800571663" },
    { vorname: "Mini", nachname: "Mouse", abteilung: "Einkauf", nr: "800571664" },
    { vorname: "Goofy", nachname: "Baum", abteilung: "IT", nr: "800571665" },
    { vorname: "Cinderella", nachname: "Fuchs", abteilung: "Kundenservice", nr: "800571666" },
    { vorname: "Arielle", nachname: "Hut", abteilung: "Vertrieb", nr: "800571667" },
    { vorname: "Belle", nachname: "Baguette", abteilung: "PR", nr: "800571668" },
    { vorname: "Rapunzel", nachname: "Sommer", abteilung: "Buchhaltung", nr: "800571669" },
];

const app = {
    data() {
        return {
            sortierenNach: 'nachname',
            personen
        };
    },
    computed: {
        sortiertePersonen() {
            return this.personen.sort((a, b) => a[this.sortierenNach].localeCompare(b[this.sortierenNach]));
        }
    }
};

Vue.createApp(app).mount("#app");