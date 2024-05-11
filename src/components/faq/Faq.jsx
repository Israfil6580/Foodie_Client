
const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className="text-center">
                <h1 className="font-title uppercase text-3xl lg:text-4xl font-bold pb-10">Frequently asked questions</h1>
            </div>
            <div className="flex flex-col gap-2 pb-24">
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-lg font-medium">
                        What is the purpose of the Food Sharing and Surplus Reduction Platform?
                    </div>
                    <div className="collapse-content">
                        <p>This question addresses the core mission and goal of the platform, highlighting its aim to reduce food waste and facilitate sharing among communities.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        Who can use the platform?
                    </div>
                    <div className="collapse-content">
                        <p>Clarifies the target audience or user base, including individuals, businesses, organizations, or charities involved in food donation and collection.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        What types of food can be shared on the platform?
                    </div>
                    <div className="collapse-content">
                        <p>Provides information on the variety of food items accepted for sharing, including perishable and non-perishable goods, as well as dietary considerations.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        Is there a cost to use the platform?
                    </div>
                    <div className="collapse-content">
                        <p>Addresses concerns about any fees or charges associated with using the platform's services for food donation or collection.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        How does the plartform works?
                    </div>
                    <div className="collapse-content">
                        <p>Users often seek an explanation of the platform's functionality, including how surplus food is shared, collected, and distributed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;