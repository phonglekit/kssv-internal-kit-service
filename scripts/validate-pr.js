#!/usr/bin/env node

/**
 * PR Description Validator
 * Validates that PR descriptions follow the required template
 */

// Validation rules
const VALIDATION_RULES = {
  hasIssueSection: content => /##?\s*Issue/i.test(content),
  hasDescriptionSection: content => /##?\s*Description/i.test(content),
  hasWhatIDidSection: content => /###?\s*What I did/i.test(content),
  hasWhatIDidntDoSection: content => /###?\s*What I didn't do/i.test(content),
  hasUISection: content => /##?\s*UI before.*after/i.test(content),
  hasTestSection: content => /##?\s*Test/i.test(content),
  hasReviewSection: content => /##?\s*Review perspective/i.test(content),
  hasCheckboxes: content => /- \[[ x]\]/g.test(content),
  minimumLength: content =>
    content.replace(/<!--[\s\S]*?-->/g, '').trim().length > 50,
};

export function validatePRDescription(description) {
  const errors = [];
  const warnings = [];

  // Check if description is empty or too short
  if (!description || description.trim().length === 0) {
    errors.push('PR description is empty');
    return { errors, warnings, isValid: false };
  }

  // Remove HTML comments for content validation
  const contentWithoutComments = description.replace(/<!--[\s\S]*?-->/g, '');

  // Check minimum length
  if (!VALIDATION_RULES.minimumLength(description)) {
    errors.push('PR description is too short. Please provide more details.');
  }

  // Check required sections
  if (!VALIDATION_RULES.hasIssueSection(description)) {
    errors.push('Missing "Issue" section');
  }

  if (!VALIDATION_RULES.hasDescriptionSection(description)) {
    errors.push('Missing "Description" section');
  }

  if (!VALIDATION_RULES.hasWhatIDidSection(description)) {
    errors.push('Missing "What I did" subsection');
  }

  // if (!VALIDATION_RULES.hasWhatIDidntDoSection(description)) {
  //   errors.push('Missing "What I didn\'t do" subsection');
  // }

  // if (!VALIDATION_RULES.hasUISection(description)) {
  //   errors.push('Missing "UI before / after" section');
  // }

  // if (!VALIDATION_RULES.hasTestSection(description)) {
  //   errors.push('Missing "Test" section');
  // }

  // if (!VALIDATION_RULES.hasReviewSection(description)) {
  //   errors.push('Missing "Review perspective" section');
  // }

  // // Check if review perspective has checkboxes
  // if (!VALIDATION_RULES.hasCheckboxes(description)) {
  //   warnings.push('Review perspective section should include checkboxes');
  // }

  // Check for placeholder content
  const placeholders = [
    '<!-- e.g. #22 -->',
    '<!-- Write about what you did within this PR. -->',
    '<!-- Write about what you have not done within this PR. -->',
    '<!-- If the UI or behavior changes, share before/after screenshots or videos. -->',
    '<!-- Write test items and test methods. -->',
  ];

  placeholders.forEach(placeholder => {
    if (description.includes(placeholder)) {
      warnings.push(`Please replace placeholder: "${placeholder}"`);
    }
  });

  return {
    errors,
    warnings,
    isValid: errors.length === 0,
  };
}

function main() {
  const prBody = process.env.PR_BODY || '';
  const prTitle = process.env.PR_TITLE || '';

  console.log('🔍 Validating PR description...');
  console.log(`PR Title: ${prTitle}`);
  console.log('---');

  // Validate PR title format (conventional commits)
  const conventionalCommitPattern =
    /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(\(.+\))?: .+/;

  const titleValidation = {
    errors: [],
    warnings: [],
  };

  if (!conventionalCommitPattern.test(prTitle)) {
    titleValidation.errors.push(
      'PR title should follow conventional commit format: "type(scope): description".\n' +
        'Valid types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert\n' +
        'Example: "feat(auth): add user login functionality"'
    );
  }

  // Validate PR description
  const descriptionValidation = validatePRDescription(prBody);

  // Output results
  const allErrors = [
    ...titleValidation.errors,
    ...descriptionValidation.errors,
  ];
  const allWarnings = [
    ...titleValidation.warnings,
    ...descriptionValidation.warnings,
  ];

  if (allErrors.length > 0) {
    console.log('❌ PR validation failed with the following errors:');
    allErrors.forEach((error, index) => {
      console.log(`  ${index + 1}. ${error}`);
    });
    console.log('');
  }

  if (allWarnings.length > 0) {
    console.log('⚠️  Warnings:');
    allWarnings.forEach((warning, index) => {
      console.log(`  ${index + 1}. ${warning}`);
    });
    console.log('');
  }

  if (allErrors.length === 0) {
    console.log('✅ PR validation passed!');
    if (allWarnings.length > 0) {
      console.log(
        'ℹ️  Consider addressing the warnings above for better PR quality.'
      );
    }
  }

  // Exit with error code if validation failed
  process.exit(allErrors.length > 0 ? 1 : 0);
}

main();
