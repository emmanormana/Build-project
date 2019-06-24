import React from 'react';

const WelcomePage = () => {
    return (
        <>
            <p>Welcome Gabriel!</p>
            <p>Quick Links</p>
            <p>Add a Tool</p>
            <p>Borrow a Tool</p>
            <div>
                <button>My Tools</button>
                <p>In this section you can add new tools to your account, edit those tools, and search or browse for a
                    tool. You can also see your tool to that list.</p>
            </div>
            <div>
                <button>My Network</button>
                <p>In this section you can view all members of your network, search for a member, add a new member and
                    request to be added to another members network.</p>
            </div>
            <div>
                <button>My Rentals</button>
                <p>In this section you can view tools you have loaded or rented out and also tools you borrowed or
                    rented from others. This section also shows all active rental requests.</p>
            </div>
        </>
    )
};

export default WelcomePage;