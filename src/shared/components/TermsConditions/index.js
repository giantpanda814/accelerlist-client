import React, { Component } from "react";
import { Collapse } from "reactstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

const StlyedTermsConditions = styled(Collapse)`
  div {
    margin-bottom: 1em;
  }

  h2 {
    margin-top: 1em;
  }

  &.scroll {
    overflow: auto;
    height: 200px;
  }
`;

class TermsConditions extends Component {
  render() {
    const { isOpen, scroll, scrollHeight } = this.props;

    return (
      <StlyedTermsConditions
        isOpen={isOpen}
        className={scroll ? "scroll" : ""}
        style={
          scrollHeight ? { height: scrollHeight, marginBottom: "2em" } : ""
        }
      >
        <h2 className="mt-0">Terms &amp; Conditions</h2>
        <p>Last updated: November 14, 2018</p>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the https://app.accelerlist.com
          website (the "Service") operated by AccelerList Inc ("us", "we", or
          "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned upon your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who wish to access or use the Service.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you do not have
          permission to access the Service.
        </p>
        <h2>Subscriptions</h2>
        <p>
          Some parts of the Service are billed on a subscription basis
          ("Subscription(s)"). You will be billed in advance on a recurring and
          periodic basis ("Billing Cycle"). Billing cycles are set either on a
          monthly or annual basis, depending on the type of subscription plan
          you select when purchasing a Subscription.
        </p>
        <p>
          At the end of each Billing Cycle, your Subscription will automatically
          renew under the exact same conditions unless you cancel it or
          AccelerList Inc cancels it. You may cancel your Subscription renewal
          either through your online account management page or by contacting
          AccelerList Inc customer support team.
        </p>
        <p>
          A valid payment method, including credit card, is required to process
          the payment for your Subscription. You shall provide AccelerList Inc
          with accurate and complete billing information including full name,
          address, state, zip code, telephone number, and a valid payment method
          information. By submitting such payment information, you automatically
          authorize AccelerList Inc to charge all Subscription fees incurred
          through your account to any such payment instruments.
        </p>
        <p>
          Should automatic billing fail to occur for any reason, AccelerList Inc
          will issue an electronic invoice indicating that you must proceed
          manually, within a certain deadline date, with the full payment
          corresponding to the billing period as indicated on the invoice.
        </p>
        <h2>Free Trial</h2>
        <p>
          AccelerList Inc may, at its sole discretion, offer a Subscription with
          a free trial for a limited period of time ("Free Trial").
        </p>
        <p>
          You may be required to enter your billing information in order to sign
          up for the Free Trial.
        </p>
        <p>
          If you do enter your billing information when signing up for the Free
          Trial, you will not be charged by AccelerList Inc until the Free Trial
          has expired. On the last day of the Free Trial period, unless you
          cancelled your Subscription, you will be automatically charged the
          applicable Subscription fees for the type of Subscription you have
          selected.
        </p>
        <p>
          At any time and without notice, AccelerList Inc reserves the right to
          (i) modify the terms and conditions of the Free Trial offer, or (ii)
          cancel such Free Trial offer.
        </p>
        <h2>Fee Changes</h2>
        <p>
          AccelerList Inc, in its sole discretion and at any time, may modify
          the Subscription fees for the Subscriptions. Any Subscription fee
          change will become effective at the end of the then-current Billing
          Cycle.
        </p>
        <p>
          AccelerList Inc will provide you with a reasonable prior notice of any
          change in Subscription fees to give you an opportunity to terminate
          your Subscription before such change becomes effective.
        </p>
        <p>
          Your continued use of the Service after the Subscription fee change
          comes into effect constitutes your agreement to pay the modified
          Subscription fee amount.
        </p>
        <h2>Refunds</h2>
        <p>
          Except when required by law, paid Subscription fees are
          non-refundable.
        </p>
        <h2>Accounts</h2>
        <p>
          When you create an account with us, you guarantee that you are above
          the age of 18, and that the information you provide us is accurate,
          complete, and current at all times. Inaccurate, incomplete, or
          obsolete information may result in the immediate termination of your
          account on the Service.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and password, including but not limited to the restriction of
          access to your computer and/or account. You agree to accept
          responsibility for any and all activities or actions that occur under
          your account and/or password, whether your password is with our
          Service or a third-party service. You must notify us immediately upon
          becoming aware of any breach of security or unauthorized use of your
          account.
        </p>
        <p>
          You may not use as a username the name of another person or entity or
          that is not lawfully available for use, a name or trademark that is
          subject to any rights of another person or entity other than you,
          without appropriate authorization. You may not use as a username any
          name that is offensive, vulgar or obscene.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          The Service and its original content, features and functionality are
          and will remain the exclusive property of AccelerList Inc and its
          licensors. The Service is protected by copyright, trademark, and other
          laws of both the United States and foreign countries. Our trademarks
          and trade dress may not be used in connection with any product or
          service without the prior written consent of AccelerList Inc.
        </p>
        <h2>Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third party web sites or services
          that are not owned or controlled by AccelerList Inc
        </p>
        <p>
          AccelerList Inc has no control over, and assumes no responsibility for
          the content, privacy policies, or practices of any third party web
          sites or services. We do not warrant the offerings of any of these
          entities/individuals or their websites.
        </p>
        <p>
          You acknowledge and agree that AccelerList Inc shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with use of or
          reliance on any such content, goods or services available on or
          through any such third party web sites or services.
        </p>
        <p>
          We strongly advise you to read the terms and conditions and privacy
          policies of any third party web sites or services that you visit.
        </p>
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the Service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever and without limitation,
          including but not limited to a breach of the Terms.
        </p>
        <p>
          If you wish to terminate your account, you may simply discontinue
          using the Service.
        </p>
        <p>
          All provisions of the Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </p>
        <h2>Indemnification</h2>
        <p>
          You agree to defend, indemnify and hold harmless AccelerList Inc and
          its licensee and licensors, and their employees, contractors, agents,
          officers and directors, from and against any and all claims, damages,
          obligations, losses, liabilities, costs or debt, and expenses
          (including but not limited to attorney's fees), resulting from or
          arising out of a) your use and access of the Service, by you or any
          person using your account and password, or b) a breach of these Terms.
        </p>
        <h2>Limitation Of Liability</h2>
        <p>
          In no event shall AccelerList Inc, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your access to or use of
          or inability to access or use the Service; (ii) any conduct or content
          of any third party on the Service; (iii) any content obtained from the
          Service; and (iv) unauthorized access, use or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          (including negligence) or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </p>
        <h2>Disclaimer</h2>
        <p>
          Your use of the Service is at your sole risk. The Service is provided
          on an "AS IS" and "AS AVAILABLE" basis. The Service is provided
          without warranties of any kind, whether express or implied, including,
          but not limited to, implied warranties of merchantability, fitness for
          a particular purpose, non-infringement or course of performance.
        </p>
        <p>
          AccelerList Inc its subsidiaries, affiliates, and its licensors do not
          warrant that a) the Service will function uninterrupted, secure or
          available at any particular time or location; b) any errors or defects
          will be corrected; c) the Service is free of viruses or other harmful
          components; or d) the results of using the Service will meet your
          requirements.
        </p>
        <h2>Exclusions</h2>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or
          the exclusion or limitation of liability for consequential or
          incidental damages, so the limitations above may not apply to you.
        </p>
        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of California, United States, without regard to its conflict of
          law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have had between
          us regarding the Service.
        </p>
        <h2>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will provide at
          least 15 days notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.
        </p>
        <p>
          By continuing to access or use our Service after any revisions become
          effective, you agree to be bound by the revised terms. If you do not
          agree to the new terms, you are no longer authorized to use the
          Service.
        </p>
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us.</p>
      </StlyedTermsConditions>
    );
  }
}

TermsConditions.PropTypes = {
  isOpen: PropTypes.bool,
  scroll: PropTypes.bool,
  scrollHeight: PropTypes.string
};

TermsConditions.defaultProps = {
  isOpen: false,
  scroll: false,
  scrollHeight: ""
};

export default TermsConditions;
