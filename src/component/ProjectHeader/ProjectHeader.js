import React from "react";
import { styled } from '@pigment-css/react';

function ProjectHeader({ title, authors, affiliations, publishedAt }) {
  return (
    <>
      <NameHeader>
	{title}
      </NameHeader>
     <Authors>
        {authors.map((author, idx) => (
          <span key={idx}>
            {author.url ? (
              <a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a>
            ) : (
              author.name
            )}
            <sup>{author.affiliations.join(',')}</sup>
            {idx < authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </Authors>
      {hasEqualContribution && (
        <EqualContributionNote>* Authors contributed equally</EqualContributionNote>
      )}
      <AffiliationList>
        {Object.entries(affiliations).map(([num, name]) => (
          <div key={num}><sup>{num}</sup> {name}</div>
        ))}
      </AffiliationList>
      <PublishedAt>
	{ publishedAt }
      </PublishedAt>
      
    </>
  );
}

const NameHeader = styled.h1`
  max-width: 800px;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  font-size: 4rem;
`;

const Authors = styled.p`
  padding-top: 1rem;
  font-weight: 300;
  font-size: 1.rem;
`;

const AffiliationList = styled.div`
  font-size: 1rem;
  font-style: italic;
  color: #666;
  text-align: center;
  margin-top: 0.5rem;
`;

const PublishedAt = styled.p`
  padding-bottom: 1rem;
  font-weight: 100;
  font-size: 1.25rem;
`;

export default ProjectHeader;
