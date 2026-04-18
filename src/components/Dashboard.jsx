import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import PollItemList from './PollItemList';

const Dashboard = ({ answeredQuestions, unansweredQuestions }) => {
  const [tabId, setTabId] = useState('tab-0');
  const isFirstRender = useRef(true);

  // TODO document this function
  const handleTabClick = (event) => {
    const tabIdClicked = event.currentTarget.id;
    const targetId = event.currentTarget.getAttribute('aria-controls');
    const tabpanel = document.getElementById(targetId);

    // If user clicked active tab, do nothing
    if (tabIdClicked === tabId) {
      return;
    }

    setTabId(tabIdClicked);

    // Set focus on the associated tabpanel
    if (tabpanel) {
      tabpanel.setAttribute('tabindex', '-1');
      tabpanel.focus();
    }
  };

  // Focus the active tabpanel after it's rendered
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const tabpanel = document.getElementById(`tabpanel-${tabId.split('-')[1]}`);

    if (tabpanel) {
      tabpanel.setAttribute('tabindex', '-1');
      tabpanel.focus();
    }
  }, [tabId]); // Run whenever tabId changes

  return (
    <>
      <AppHeader />
      <div className="page-content">
        <div className="tabs">
          <div role="tablist" aria-label="Polls overview">
            <button
              id="tab-0"
              role="tab"
              aria-selected={tabId === 'tab-0'}
              aria-controls="tabpanel-0"
              onClick={handleTabClick}
            >
              <span>Unanswered Polls</span>
            </button>
            <button
              id="tab-1"
              role="tab"
              aria-selected={tabId === 'tab-1'}
              aria-controls="tabpanel-1"
              onClick={handleTabClick}
            >
              <span>Answered Polls</span>
            </button>
          </div>
          <div
            id="tabpanel-0"
            role="tabpanel"
            aria-labelledby="tab-0"
            hidden={tabId !== 'tab-0'}
          >
            <PollItemList questions={unansweredQuestions} />
          </div>
          <div
            id="tabpanel-1"
            role="tabpanel"
            aria-labelledby="tab-1"
            hidden={tabId !== 'tab-1'}
          >
            <PollItemList questions={answeredQuestions} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  if (!authedUser) {
    return {
      unansweredQuestions: [],
      answeredQuestions: []
    };
  }

  // Determine which questions the logged-in user has/has-not answered
  // to pass to the PollItemList component
  const unansweredQuestions = [];
  const answeredQuestions = [];

  const activeUserAnswers = users[authedUser]?.answers || {};

  for (const questionId in questions) {
    if (Object.hasOwn(activeUserAnswers, questionId)) {
      answeredQuestions.push(questions[questionId]);
    } else {
      unansweredQuestions.push(questions[questionId]);
    }
  }

  return {
    answeredQuestions,
    unansweredQuestions
  };
};

export default connect(mapStateToProps)(Dashboard);
